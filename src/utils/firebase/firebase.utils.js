
import { initializeApp } from "firebase/app";
import { 
   GoogleAuthProvider, 
   getAuth, 
   signInWithPopup,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword
} from 'firebase/auth'
import {
   getFirestore,
   doc,
   getDoc,
   setDoc
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