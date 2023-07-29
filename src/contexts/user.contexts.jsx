import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, CreateDocumentUserFromUserAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null)
   const value = {currentUser, setCurrentUser}

   useEffect(() => {
      const unSubscribe = onAuthStateChangedListener(async (user) => {
         if(user) {
            try {
               await CreateDocumentUserFromUserAuth(user)
            } catch (error) {
               console.log(error)
            }
         }
         await setCurrentUser(user)
      })

      return unSubscribe
   }, [])

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}