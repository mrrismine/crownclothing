import { Fragment, useContext } from "react"
import { Outlet,Link } from "react-router-dom"

import { ReactComponent as CrwnLogo} from '../../assets/horse.svg'
import { UserContext } from "../../contexts/user.contexts"
import { SignOut } from "../../utils/firebase/firebase.utils"
import { CartIconComponent } from "../../components/cart-icon/cart-icon.component.jsx"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"

const NavigationBar = () => {

   const {currentUser} = useContext(UserContext)

   const SignOutHandler = async () => {
      try {
         await SignOut()
         alert('you are Logged Out')
      } catch (error) {
         alert(error.code)
      }
   }

   return (
      <Fragment>
         <div className="bg-gray-200 navigation border-b-4 h-20 border-black flex flex-row justify-between relative right-0 left-0 top-0">
            <Link className="logo-container flex flex-row items-center" to='/'>
               <CrwnLogo />
            </Link>
            <div className="nav-link-container flex flex-row w-72 justify-around items-center box-border">
               <Link className="nav-link" to='/shop'>
                  SHOP
               </Link>

               {
                  currentUser ? (
                     <span onClick={SignOutHandler} className=" cursor-pointer"> SIGN OUT </span>
                     ) :
                     (
                        <Link className="login-link" to='/sign-in'>
                     LOGIN
                  </Link>
                  )
               }

               <CartIconComponent />
               <CartDropDown />
            </div>
         </div>
         <Outlet/>
      </Fragment >
   )
 }

 export default NavigationBar