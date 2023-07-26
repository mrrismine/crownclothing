import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"

import { ReactComponent as CrwnLogo} from '../../assets/horse.svg'

const NavigationBar = () => {
   return (
      <Fragment>
         <div className="bg-gray-200 navigation border-b-4 h-20 border-black flex flex-row justify-between fixed right-0 left-0 top-0">
            <Link className="logo-container flex flex-row items-center" to='/'>
               <CrwnLogo />
            </Link>
            <div className="nav-link-container flex flex-row w-40 justify-around items-center box-border">
               <Link className="nav-link" to='/shop'>
                  SHOP
               </Link>
               <Link className="login-link" to='/sign-in'>
                  LOGIN
               </Link>
            </div>
         </div>
         <Outlet/>
      </Fragment >
   )
 }

 export default NavigationBar