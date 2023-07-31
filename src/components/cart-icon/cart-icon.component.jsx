import { useContext } from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg'
import { CartDropDownContext } from '../../contexts/cart-dropdown.contexts';


export const CartIconComponent = () => {
   const {currentDropDown, setCurrentDropDown, cartCount} = useContext(CartDropDownContext)
   
   const onClickHandler = () => {
      setCurrentDropDown(!currentDropDown)
   }

   return(
      <div className='flex flex-col place-items-center cursor-pointer'>
         <ShoppingIcon onClick={onClickHandler} className=' w-6 h-8'/>
         <span className=' font-mono text-xs font-bold'>{cartCount}</span>
      </div>
      
   )
};

