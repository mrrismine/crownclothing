import { useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"

export const ProductCard = ({products}) => {

   const {addItemToCart, setCartCount, cartCount} = useContext(CartDropDownContext)

   return (
      <div className='m-20'>
         <h1 className=" font-bold text-4xl underline">HAT</h1>
         <div className="grid grid-cols-4 align-middle relative">
            {
               products.map((product) => {
                  const addToCartHandler = () => {
                     addItemToCart(product)
                     setCartCount(cartCount+1)
                  }

                  return (
                  <div className=' flex flex-col mt-10 ml-8 ' key={product.id}>
                     <img alt={product.name} src={product.imageUrl} className="h-96 w-96 cursor-pointer hover:scale-90 transition-transform " />

                     <div className=" flex flex-row justify-between font-mono"> 
                        <h1 className=" ">{product.name}</h1>
                        <h1>Price : ${product.price}</h1>
                     </div>
                     <button className=" font-mono font-extrabold text-lg bg-slate-200 rounded-lg p-1 border-2 border-black hover:bg-black hover:text-white"
                     onClick={addToCartHandler}
                     >ADD TO CART</button>
                </div> 
             )}
            
               )
            }
         </div>  
      </div>
   )
}
