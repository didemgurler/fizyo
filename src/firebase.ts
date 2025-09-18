// Firebase initialization
// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6taZVMjijSVfNT6JPecAtDEshr9rV7tU',
  authDomain: 'fizyoterapi-21e03.firebaseapp.com',
  projectId: 'fizyoterapi-21e03',
  storageBucket: 'fizyoterapi-21e03.firebasestorage.app',
  messagingSenderId: '380565759212',
  appId: '1:380565759212:web:bb56bc03e94884582eb1c9',
  measurementId: 'G-2L51HH72F6',
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics only in supported environments (browser) to avoid SSR/build issues
export let analytics: Analytics | undefined;

(async () => {
  try {
    if (typeof window !== 'undefined' && (await isSupported())) {
      analytics = getAnalytics(app);
    }
  } catch (e) {
    // Analytics might not be available in all environments; fail silently
    console.warn('Firebase Analytics not initialized:', e);
  }
})();
