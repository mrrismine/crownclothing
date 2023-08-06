import { Route, Routes } from "react-router-dom"

import ShopPreview from "../preview/preview.page"
import Category from "../shop-category/shop-category.page"

const Shop = () => {
   return (
         <Routes>
            <Route index element={< ShopPreview/>} />
            <Route path=":category" element={<Category />} />
         </Routes>
   )
}

export default Shop