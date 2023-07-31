

const CartItem = ({items}) => {
   
   return (
      <div className="max-h-72 relative">
         {
            items[0] ? (
               items.map((item) => {
                  const {name, imageUrl, quantity, price} = item
                  return (
                     <div className="grid grid-cols-3 font-mono text-sm font-bold m-2 text-center border-2 items-center">
                        <img src={imageUrl} className=" max-h-16 w-14" alt={name}/>
                        <span>{name}</span>
                        <span>{quantity} x ${price}</span>
                     </div>
                  ) 
                  
               })
            ) :
            (
               <div className=" flex flex-col justify-center h-72"> 
                  <h1 className=" text-black text-center font-mono"> YOUR CART IS EMPTY </h1>
               </div>
            )
            
         }
      </div>
   )
}

export default CartItem

// ketika item di tambahkan akan ada penambahan item pada cart item, jika item yang sama akan menambah kuantitas
// jika item yang beda akan menambahkan item baru