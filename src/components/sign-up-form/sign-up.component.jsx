import { useState } from "react"

import { 
   CreateUserAndPasswordFromAuth,
   CreateDocumentUserFromUserAuth
} 
from "../../utils/firebase/firebase.utils"

import {ReactComponent as CrwnLogo} from '../../assets/horse.svg'

const SignUpForm = () => {

   const initialFormField = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
   }

   const [formfields, SetFormFields] = useState(initialFormField)
   
   const {displayName,email,password,confirmPassword} = formfields

   const onChangeHandler = async (event) => {
      const {name, value} = event.target
      await SetFormFields({...formfields, [name] : value})
      
   }

   const resetFormField = () => {
      SetFormFields(initialFormField)
   }

   const onSubmitHandler = async (event) => {
      event.preventDefault()
      if(password !== confirmPassword) return alert('Password and Confirm Password not Match')
      try {
         let {user} = await CreateUserAndPasswordFromAuth(email, password)
         await CreateDocumentUserFromUserAuth(user, {displayName: displayName})
         alert('User Has been Made')

         resetFormField()
      } catch (error) {
         if(error.code === 'auth/email-already-in-use') {
            alert(' Cannot Create User, Email Has been Taken')
         } else {
            alert(`cannot create user ${error.message}`)
         }
      }
   }

   return(
      <div className="signupform">
         <div>
            <div className="flex flex-col items-center min-h-screen sm:justify-center justify-center sm:pt-0 bg-gray-50">
                    <a href="/">
                        <CrwnLogo />
                    </a>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="displayName"
                                    onChange={onChangeHandler}
                                    value={displayName}
                                    type="text"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
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
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="confirmPassword"
                                    onChange={onChangeHandler}
                                    value={confirmPassword}
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
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

         
      </div>
   )
}

export default SignUpForm