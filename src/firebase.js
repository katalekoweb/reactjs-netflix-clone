import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAQtCJQJL5Vy7EndoBPAf-ftwMzhIgK8wA",
  authDomain: "netflix-clone-cf3af.firebaseapp.com",
  projectId: "netflix-clone-cf3af",
  storageBucket: "netflix-clone-cf3af.firebasestorage.app",
  messagingSenderId: "396903428563",
  appId: "1:396903428563:web:49bfa4309074533d3dbf26",
  measurementId: "G-3PDTQTYG3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res?.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            userLevel: "user"
        })
    } catch (error) {
        console.log(error);  
        // alert(error)   
        toast.error(error.code.split('/')[1]?.split('-')?.join(" "))  
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        // alert(error)  
        toast.error(error.code.split('/')[1]?.split('-')?.join(" "))         
    }
}

const logout = () => {
    try {
        signOut(auth)
    } catch (error) {
        console.log(error);
        
    }
}

export {
    auth,
    db,
    signup,
    login,
    logout
}