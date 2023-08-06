
import { initializeApp } from "firebase/app";
import { 
   GoogleAuthProvider, 
   getAuth, 
   signInWithPopup,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged
} from 'firebase/auth'
import {
   getFirestore,
   doc,
   getDoc,
   setDoc,
   collection,
   writeBatch,
   query,
   getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBaSXo4b8kWPOBUYocp3ScRrzvhz2q1nk",
  authDomain: "crownproject1-46d9b.firebaseapp.com",
  projectId: "crownproject1-46d9b",
  storageBucket: "crownproject1-46d9b.appspot.com",
  messagingSenderId: "319252192069",
  appId: "1:319252192069:web:27006a8d1a530b7da37c2c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
   'login_hint': 'user@example.com'
})

export const auth = getAuth()
export const SignInwithGooglePopUp = () => signInWithPopup(auth,provider)

export const db = getFirestore()

export const addCollectionToFirestore = async (collectionKey, objectToAdd) => {
   const collectionRef = collection(db, collectionKey)
   const batch = writeBatch(db)

   objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
   })

   await batch.commit()
}

export const getCollectionFromFirestore = async () => {
   const collectionRef = collection(db, 'categories')
   const q = query(collectionRef)

   const querySnapShot = await getDocs(q)
   const categoryMap = querySnapShot.docs.reduce((acc, SnapShot) => {
      const {title, items} = SnapShot.data()
      acc[title.toLowerCase()] = items
      return acc
   }, {})

   return categoryMap
}

export const CreateDocumentUserFromUserAuth = async (userAuth, additionalInformation) => {
   const UserDocRef = await doc(db, 'users', userAuth.uid)
   
   const UserSnapShot = await getDoc(UserDocRef)

   if(!UserSnapShot.exists()) {
      const {displayName, email} = userAuth
      const createdAt = new Date()
      try {
         await setDoc(UserDocRef, {
            displayName, 
            email, 
            createdAt,
            ...additionalInformation
         })
         console.log('user has been made')
      } catch (error) {
         console.log(error)
      }
   }
   return UserDocRef
}

export const CreateUserAndPasswordFromAuth = (email, password) => createUserWithEmailAndPassword(auth, email, password)

export const SignInWithUserAndPasswordFromAuth = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const SignOut = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)