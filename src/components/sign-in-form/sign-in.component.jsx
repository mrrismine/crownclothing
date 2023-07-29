import { useState } from "react"
import { 
   SignInWithUserAndPasswordFromAuth,
   SignInwithGooglePopUp
} 
from "../../utils/firebase/firebase.utils"

import {ReactComponent as CrwnLogo} from '../../assets/horse.svg'

const SignInForm = () => {

   const initialFormField = {
      email: '',
      password: '',
   }

   const [formfields, SetFormFields] = useState(initialFormField)
   
   const {email, password} = formfields

   const onChangeHandler = async (event) => {
      const {name, value} = event.target
      await SetFormFields({...formfields, [name] : value})
      
   }

   const resetFormField = () => {
      SetFormFields(initialFormField)
   }

   const onSubmitHandler = async (event) => {
      event.preventDefault()
       try {
         await SignInWithUserAndPasswordFromAuth(email,password)

         resetFormField()
      } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
                alert('no user have found !')
                break;
            case 'auth/wrong-password' :
                alert(' Wrong password !');
                break;
            default:
                console.log(error)
        }
      }
   }

    const LoginWithGoogle = async () => {
        
        try {
            await SignInwithGooglePopUp()
        } catch (error) {
            switch(error.code){
                case 'auth/popup-closed-by-user' :
                    alert('Not Yet Sign In');
                    break;
                default:
                    console.log(error)
            }
        }
    }


   return(
      <div className="sign-in-form">
         <div>
            <div className="flex flex-col items-center min-h-screen sm:justify-center justify-center sm:pt-0 bg-slate-100">
                <div>
                    <a href="/">
                        <CrwnLogo />
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={onSubmitHandler}>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="email"
                                    onChange={onChangeHandler}
                                    value={email}
                                    type="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="password"
                                    onChange={onChangeHandler}
                                    value={password}
                                    type="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">

                            <button
                                type="submit"
                                className="inline-flex items-center px-8 py-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false hover:bg-slate-200 hover:text-black"
                            >
                                Login
                            </button>
                            <button
                                onClick={LoginWithGoogle}
                                type="button"
                                className="inline-flex items-center px-8 py-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md active:bg-gray-900 false hover:bg-slate-200 hover:text-black"
                            >
                                Login In With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

         
      </div>
   )
}

export default SignInForm