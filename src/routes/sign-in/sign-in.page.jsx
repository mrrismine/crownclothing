import { SignInwithGooglePopUp, CreateDocumentUserFromUserAuth, DeleteUserFromUserAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

   const LoginWithGoogle = async () => {
      const {user} = await SignInwithGooglePopUp()
      console.log(user)
      await CreateDocumentUserFromUserAuth(user)
      
   }

   const deleteAccount = async() => {
      const {user} = await SignInwithGooglePopUp()
      console.log(user)
      await DeleteUserFromUserAuth(user)
   }

   return (
      <>
         <button onClick={LoginWithGoogle}>
            SIGN IN WITH GOOGLE
         </button>
         <br/>
         <button onClick={deleteAccount}>
            DELETE ACCOUNT
         </button>
      </>
   )
} 

export default SignIn