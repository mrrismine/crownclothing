import { Fragment, useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"

const CartDropDown = () => {
   const { currentDropDown} = useContext(CartDropDownContext)

   return (
   <Fragment >
         {
            currentDropDown ? (
            <div className="flex flex-col fixed top-20 z-10 bg-white w-64 h-96 border-black border-2 justify-between">
               <div>
            
               </div>
               <button className=" bg-black text-white mb-4 w-3/4 items-center self-center p-2 rounded-lg">GO TO CHECK OUT</button>
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