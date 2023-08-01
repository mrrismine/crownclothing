import { createContext, useState, useEffect } from "react";

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

const DecrementCardItem = (cartItems, productToDecrement) => {

   const checkOutMinus = cartItems.find((cartItems) => cartItems.quantity < 1)

   if(checkOutMinus) {
      return cartItems.filter((cartItem) => cartItem.quantity > 0
   )
   }
   const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToDecrement.id)

   if(existingCartItems) {
      console.log(existingCartItems)
      return cartItems.map((cartItem) => 
         cartItem.id === productToDecrement.id ?
         {...cartItem, quantity : cartItem.quantity - 1}
         : cartItem
   )
   }
}

const removeCartItem = (cartItems, productToRemove) => {


      return cartItems.filter((cartItems) => cartItems.id !== productToRemove.id 
      )
   }

export const CartDropDownContext = createContext({
   currentDropDown : null,
   setCurrentDropDown : () => null,
   cartItems : [],
   addItemToCart: () => {},
   cartCount : null,
   DecrementItemOnCart : () => {},
   RemoveItemonCart : () => {},
   totalPrice: null,
   setCartCount: () => {}
})

export const CartDropDownProvider = ({children}) => {
   const [currentDropDown, setCurrentDropDown] = useState(null)
   const [cartItems, setCartItems] = useState([])
   const [cartCount, setCartCount] = useState(0)
   const [totalPrice, setTotalPrice] = useState(0)

   const addItemToCart = (productToAdd) => {

      setCartItems(addCartItem(cartItems, productToAdd))
   }

   const DecrementItemOnCart = (productToDecrement) => {

      setCartItems(DecrementCardItem(cartItems, productToDecrement))
   }

   const RemoveItemonCart = (productToRemove) => {

      setCartItems(removeCartItem(cartItems, productToRemove))
   }

   useEffect(() => {
      const newCartCount = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity
         ,0 
      )
      setCartCount(newCartCount)
   },[cartItems])

   useEffect(()=> {

      console.log(cartItems)
      const newCartTotal = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity * cartItem.price,
         0
      )
      setTotalPrice(newCartTotal)
   }, [cartItems])

   const value = {currentDropDown, setCurrentDropDown, cartItems, addItemToCart, cartCount, DecrementItemOnCart, RemoveItemonCart, totalPrice }

   return <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
}