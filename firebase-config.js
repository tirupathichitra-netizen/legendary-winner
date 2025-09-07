// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCh9ol8-4o9H_LIZDnsebJNghandEIbRHY",
  authDomain: "santapanelv1.firebaseapp.com",
  databaseURL: "https://santapanelv1-default-rtdb.firebaseio.com",
  projectId: "santapanelv1",
  storageBucket: "santapanelv1.firebasestorage.app",
  messagingSenderId: "566701049117",
  appId: "1:566701049117:web:dee38ae99e64c7c20b0df4",
  measurementId: "G-15KV357B7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };