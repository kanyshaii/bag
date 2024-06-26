import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMSn-zmMKYp86dDGmat4_1GOMSPVAOsO8",
    authDomain: "bags-829c1.firebaseapp.com",
    projectId: "bags-829c1",
    storageBucket: "bags-829c1.appspot.com",
    messagingSenderId: "610749003931",
    appId: "1:610749003931:web:86e36051c1dcc3d6286e3e"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const LogIn = () => signInWithPopup(auth, provider);
export const LogOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productsCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

export const uploadProductPhoto = (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log("Failed to upload product photo:", error);
    });
};