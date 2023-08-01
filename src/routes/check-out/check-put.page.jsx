import { useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"
import CartCheckOut from "../../components/cart-checkout/cart-checkout.component"

const CheckOutPage = () => {

   const {cartItems, totalPrice} = useContext(CartDropDownContext)

   return(
      
         <div className="flex flex-col justify-center items-center">
            <div className="grid w-1/2 grid-flow-col grid-cols-5 text-center m-10 p-4 border-b-2 border-b-black">
               <h1>Product</h1>
               <h1>Description</h1>
               <h1>Price</h1>
               <h1>Quantity</h1>
               <h1>Remove</h1>
            </div>
            <CartCheckOut cartItems={cartItems}/>
            <div className=" w-1/2 text-end border-t-black border-t-2">
               TOTAL : ${totalPrice}
            </div>
         </div>
      
   )
}

export default CheckOutPage