import { Fragment, useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"
import CartItem from "../cart-item/cart-item.component"
import { Link } from "react-router-dom"

const CartDropDown = () => {
   const { currentDropDown, cartItems} = useContext(CartDropDownContext)
   
   return (
   <Fragment >
         {
            currentDropDown ? (
            <div className="flex flex-col absolute top-20 z-10 bg-white w-64 h-96 border-black border-2 justify-between ">
               <div>
                     <CartItem items={cartItems}/>
               </div>
               <Link className=" bg-black text-white mb-4 w-3/4 items-center text-center self-center p-2 rounded-lg" to='/checkout'>GO TO CHECK OUT</Link>
            </div>
            ) : (
               <>
               </>
            )
         }
     </Fragment>

   )
}

export default CartDropDown