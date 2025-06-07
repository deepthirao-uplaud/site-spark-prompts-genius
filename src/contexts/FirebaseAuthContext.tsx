
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface FirebaseAuthContextType {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string, userData: { fullName: string; phoneNumber: string }) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isFirebaseConfigured: boolean;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextType | undefined>(undefined);

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw new Error('useFirebaseAuth must be used within a FirebaseAuthProvider');
  }
  return context;
};

export const FirebaseAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isFirebaseConfigured = auth !== null && db !== null;

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [isFirebaseConfigured]);

  const signup = async (email: string, password: string, userData: { fullName: string; phoneNumber: string }) => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Store additional user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      fullName: userData.fullName,
      phoneNumber: userData.phoneNumber,
      email: email,
      createdAt: new Date().toISOString()
    });
  };

  const login = async (email: string, password: string) => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    
    await signOut(auth);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    isFirebaseConfigured
  };

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
