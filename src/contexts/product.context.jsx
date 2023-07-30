import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../assets/shop-data.json'

export const ProductContext = createContext({
   currentProduct : null,
   setCurrentProduct : () => null
}) 

export const ProductProvider = ({children}) => {
   const [currentProduct, setCurrentProduct] = useState(SHOP_DATA)
   const value = {currentProduct}

   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}