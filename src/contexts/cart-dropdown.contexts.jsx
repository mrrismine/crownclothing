import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

   const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

   if(existingCartItems) {
      console.log(existingCartItems)
      return cartItems.map((cartItem) => 
         cartItem.id === productToAdd.id ?
         {...cartItem, quantity : cartItem.quantity + 1}
         : cartItem
   )
   }
   return [...cartItems, {...productToAdd, quantity : 1}]
}

export const CartDropDownContext = createContext({
   currentDropDown : null,
   setCurrentDropDown : () => null,
   cartItems : null,
   addItemToCart: () => {},
   cartCount : null,
   setCartCount : () => null
})

export const CartDropDownProvider = ({children}) => {
   const [currentDropDown, setCurrentDropDown] = useState(null)
   const [cartItems, setCartItems] = useState([])
   const [cartCount, setCartCount] = useState(0)

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
   }

   const value = {currentDropDown, setCurrentDropDown, cartItems, addItemToCart, setCartCount, cartCount}

   return <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
}