import { createContext, useState } from "react";

export const CartDropDownContext = createContext({
   currentDropDown : null,
   setCurrentDropDown : () => null
})

export const CartDropDownProvider = ({children}) => {
   const [currentDropDown, setCurrentDropDown] = useState(null)
   const value = {currentDropDown, setCurrentDropDown}

   return <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
}