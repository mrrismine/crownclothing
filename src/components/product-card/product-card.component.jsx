import { useContext } from "react"

import { CartDropDownContext } from "../../contexts/cart-dropdown.contexts"
import ProductPreview from "../product-preview/product-preview.component"

export const ProductCard = ({products}) => {

   const {addItemToCart } = useContext(CartDropDownContext)
   
   return (
      <div className='m-20'>
             {
               Object.keys(products).map((title) =>{
                     const product = products[title]
                     return <ProductPreview key={title} title={title} addItemToCart={addItemToCart} product={product}/>
                  })
            }
     </div>
   )
}
