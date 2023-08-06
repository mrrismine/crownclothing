import { createContext, useEffect, useState } from "react";

import { getCollectionFromFirestore } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
   currentProduct : null,
   setCurrentProduct : () => null
}) 

export const ProductProvider = ({children}) => {
   const [currentProduct, setCurrentProduct] = useState([])
   const value = {currentProduct}

   useEffect(() => {
      const getCategoryMap = async() => {
         const categoryMap = await getCollectionFromFirestore()
         setCurrentProduct(categoryMap)
      }
      getCategoryMap()
      
   },[])
   

   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}