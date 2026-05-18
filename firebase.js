import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnSZb38eBUOfQC3DByEGi3zyQiGLy8vuI",
  authDomain: "gloompop-67750.firebaseapp.com",
  projectId: "gloompop-67750",
  storageBucket: "gloompop-67750.firebasestorage.app",
  messagingSenderId: "1074621014103",
  appId: "1:1074621014103:web:9b164db79efdc184a74312",
  measurementId: "G-5K3KKJ48B3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
let currentUser = null;

window.gloomFirebase = {
  getCurrentUser: () => currentUser,
  isLoggedIn: () => !!currentUser,
  signUpEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  loginEmail: (email, password) => signInWithEmailAndPassword(auth, email, password),
  loginGoogle: () => signInWithPopup(auth, googleProvider),
  logout: () => signOut(auth),
  async savePlayerState(state, popularityScore) {
    if (!currentUser) return;
    await setDoc(doc(db, "players", currentUser.uid), {
      uid: currentUser.uid,
      email: currentUser.email || "",
      displayName: state.profile.name || currentUser.displayName || currentUser.email || "Unnamed Student",
      popularityScore,
      state,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },
  async loadPlayerState() {
    if (!currentUser) return null;
    const snap = await getDoc(doc(db, "players", currentUser.uid));
    return snap.exists() ? snap.data() : null;
  },
  async loadRankings() {
    const snap = await getDocs(query(collection(db, "players"), orderBy("popularityScore", "desc"), limit(10)));
    return snap.docs.map(d => d.data());
  }
};

onAuthStateChanged(auth, user => {
  currentUser = user;
  if (window.handleAuthChange) window.handleAuthChange(user);
});
