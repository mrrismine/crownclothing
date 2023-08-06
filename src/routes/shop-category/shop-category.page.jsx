import { useEffect, useContext, useState } from "react"

import { useParams, useNavigate } from "react-router-dom"

import { ProductContext } from "../../contexts/product.context"
import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"

const Category = () => {
   const { category } = useParams()
   const { currentProduct } = useContext(ProductContext)
   const [ products, setProducts] = useState(currentProduct[category])
   const {addItemToCart} = useContext(CartDropDownContext)
   const navigate = useNavigate()

   useEffect(() => {
      setProducts( currentProduct[category])
   },[category, currentProduct])

   console.log(products)

   return (
   <div>
      <h1 className=" font-bold text-4xl mt-5 text-center">
           <span className=" cursor-pointer">
           {category.toLocaleUpperCase()}
           </span>
      </h1>
      <h2 className=" cursor-pointer m-10 font-bold font-serif text-lg" onClick={() => navigate('/shop')}> &larr; BACK</h2>
      <div className=' grid grid-cols-4 mb-5 ' key={products.id}>
         { products &&
            products.map((product) => {
               const addToCartHandler = () => {
                  addItemToCart(product)
                  
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
               )})
            }
      </div>
      
   </div>
   )
}

export default Category