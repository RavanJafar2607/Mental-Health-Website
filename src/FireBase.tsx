import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3UnXQs9c5cEBum1J6oYF1amswGTE0aFE",
  authDomain: "mental-health-83ac3.firebaseapp.com",
  projectId: "mental-health-83ac3",
  storageBucket: "mental-health-83ac3.firebasestorage.app",
  messagingSenderId: "397992821868",
  appId: "1:397992821868:web:7a4e35e15c159e3dcbc449",
  measurementId: "G-PZY3Z7HN24",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
