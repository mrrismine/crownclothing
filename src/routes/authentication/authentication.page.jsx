import SignUpForm from "../../components/sign-up-form/sign-up.component"
import SignInForm from "../../components/sign-in-form/sign-in.component"

const SignIn = () => {
   return (
      <div className="grid grid-flow-col grid-cols-2">
         <div className="Sign-In">
            <SignInForm />
         </div>
         <div className="Sign-Up">
            <SignUpForm />

         </div>
      </div>
   )
} 

export default SignIn