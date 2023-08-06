import { useContext } from "react"

import { ProductContext } from "../../contexts/product.context"
import { ProductCard } from "../../components/product-card/product-card.component"

const ShopPreview = () => {
   const {currentProduct} = useContext(ProductContext)
   console.log(currentProduct)
   return(
      <ProductCard products={currentProduct}/>
   )
}

export default ShopPreview