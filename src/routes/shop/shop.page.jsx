import { useContext } from "react"

import { ProductContext } from "../../contexts/product.context"
import { ProductCard } from "../../components/product-card/product-card.component"

const ShopPage = () => {
   const {currentProduct} = useContext(ProductContext)
   
   return(
      <ProductCard products={currentProduct}/>
   )
}

export default ShopPage