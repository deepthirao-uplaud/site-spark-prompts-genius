
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Placeholder Firebase config - replace with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// Only initialize Firebase if we have real credentials
const hasRealCredentials = import.meta.env.VITE_FIREBASE_API_KEY && 
                          import.meta.env.VITE_FIREBASE_PROJECT_ID;

let app;
let auth;
let db;

if (hasRealCredentials) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  // Create mock objects for development without Firebase credentials
  console.warn('⚠️ Firebase credentials not found. Using demo mode. Please set up your Firebase environment variables.');
  app = null;
  auth = null;
  db = null;
}

export { auth, db };
export default app;
