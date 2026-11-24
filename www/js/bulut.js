/* Siyer Yolum — hesap ve bulut eşitleme (Kur'an Yolum ile aynı Firebase projesi ve girişi).
 * Uygulama internetsiz çalışır; ilerleme önce telefona yazılır, giriş yapılmışsa users/{uid}/profiller/siyer-yolum belgesine eşitlenir. */
import { initializeApp } from './firebase/firebase-app.js';
import {
  initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
  GoogleAuthProvider, signOut, signInWithPopup, browserPopupRedirectResolver
} from './firebase/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from './firebase/firebase-firestore.js';
import { FIREBASE_CONFIG } from './firebase-config.js';

const EN = window.DIL === 'en', yazi = (tr, en) => EN ? en : tr;
const app = initializeApp(FIREBASE_CONFIG);
const auth = initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] });
auth.languageCode = EN ? 'en' : 'tr';
const db = getFirestore(app);
let kullanici = null; const dinleyiciler = new Set();
onAuthStateChanged(auth, u => { kullanici = u; dinleyiciler.forEach(f => { try { f(u); } catch (e) { console.error(e); } }); });

const HATA = {
  'auth/invalid-email': ['E-posta adresi geçersiz.', 'The email address is not valid.'],
  'auth/missing-password': ['Şifre gir.', 'Enter a password.'],
  'auth/weak-password': ['Şifre en az 6 karakter olmalı.', 'The password must be at least 6 characters.'],
  'auth/email-already-in-use': ['Bu e-posta ile zaten bir hesap var. Giriş yap sekmesini kullan.', 'An account already exists with this email. Use Sign in.'],
  'auth/invalid-credential': ['E-posta veya şifre hatalı.', 'Wrong email or password.'],
  'auth/wrong-password': ['E-posta veya şifre hatalı.', 'Wrong email or password.'],
  'auth/user-not-found': ['Bu e-posta ile hesap bulunamadı.', 'No account found with this email.'],
  'auth/too-many-requests': ['Çok fazla deneme yapıldı. Biraz bekleyip tekrar dene.', 'Too many attempts. Wait a little and try again.'],
  'auth/network-request-failed': ['İnternet bağlantısı yok. Bağlanınca tekrar dene.', 'No internet connection. Try again when you are online.'],
  'auth/unauthorized-domain': ['Google girişi bu adreste henüz açık değil. E-postayla giriş yap.', 'Google sign-in is not enabled on this address yet. Use email.'],
  'auth/popup-closed-by-user': ['Google girişi iptal edildi.', 'Google sign-in was cancelled.'],
  'auth/cancelled-popup-request': ['Google girişi iptal edildi.', 'Google sign-in was cancelled.'],
  'auth/popup-blocked': ['Açılır pencere engellendi. İzin ver ya da e-postayla giriş yap.', 'The pop-up was blocked. Allow pop-ups or use email.']
};
const hata = e => { const h = HATA[e && e.code]; return new Error(h ? yazi(h[0], h[1]) : (e && e.message) || yazi('Bilinmeyen hata', 'Unknown error')); };
const belge = () => doc(db, 'users', kullanici.uid, 'profiller', 'siyer-yolum');

window.Bulut = {
  kullanici: () => kullanici,
  dinle(f) { dinleyiciler.add(f); f(kullanici); return () => dinleyiciler.delete(f); },
  async kayit(e, s) { try { return (await createUserWithEmailAndPassword(auth, e.trim(), s)).user; } catch (x) { throw hata(x); } },
  async giris(e, s) { try { return (await signInWithEmailAndPassword(auth, e.trim(), s)).user; } catch (x) { throw hata(x); } },
  async sifreSifirla(e) { try { await sendPasswordResetEmail(auth, e.trim()); } catch (x) { throw hata(x); } },
  async googleIle() { try { return (await signInWithPopup(auth, new GoogleAuthProvider(), browserPopupRedirectResolver)).user; } catch (x) { throw hata(x); } },
  async cikis() { await signOut(auth); },
  async indir() { if (!kullanici) return null; const s = await getDoc(belge()); return s.exists() ? JSON.parse(s.data().veri || 'null') : null; },
  async yukle(veri) { if (!kullanici) return; await setDoc(belge(), { veri: JSON.stringify(veri), eposta: kullanici.email || '', guncelleme: serverTimestamp() }, { merge: true }); }
};
window.dispatchEvent(new Event('bulut-hazir'));
