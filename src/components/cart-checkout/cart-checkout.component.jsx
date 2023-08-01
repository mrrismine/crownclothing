import { useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"

const CartCheckOut = ({cartItems}) => {
   const {DecrementItemOnCart , addItemToCart, RemoveItemonCart} = useContext(CartDropDownContext)
      
   return(
      <>
      {
         cartItems.map((cartItem) => {
            const {name, imageUrl, price, quantity} = cartItem
            const DecrementHandler = () => {
               DecrementItemOnCart(cartItem)

            }

            const IncrementHandler = () => {
               addItemToCart(cartItem)
            }

            const RemoveHandler = () => {
               RemoveItemonCart(cartItem)
           }
            
            
            
            return (  
               <div className="grid w-1/2 grid-flow-col grid-cols-5 text-center m-10 p-4 border-b-2 border-b-black items-center">
                     <img src={imageUrl} className="w-1/2" alt={name}/>
                     <h2>{name}</h2>
                     <span>${price}</span>
                     <div>
                        <span className="cursor-pointer" onClick={DecrementHandler}>&#8592; </span>
                        {quantity}
                        <span className="cursor-pointer" onClick={IncrementHandler}> &#8594; </span>
                     </div>
                     <span onClick={RemoveHandler} className=" cursor-pointer">X</span>
                  </div>
               )
            })
         }
      </>
   )

}

export default CartCheckOut