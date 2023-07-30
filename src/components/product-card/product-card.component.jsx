export const ProductCard = ({products}) => {
   return (
      <div className='m-20'>
         <h1 className=" font-bold text-4xl underline">HAT</h1>
         <div className="grid grid-cols-4 align-middle relative">
            {
               products.map(({id, name, imageUrl, price}) => (
                 <div className=' flex flex-col mt-10 ml-8 ' key={id}>
                     <img src={imageUrl} className="h-96 w-96 cursor-pointer hover:scale-90 transition-transform " />

                     <div className=" flex flex-row justify-between font-mono"> 
                        <h1 className=" ">{name}</h1>
                        <h1>Price : ${price}</h1>
                     </div>
                     <button className=" font-mono font-extrabold text-lg bg-slate-200 rounded-lg p-1 border-2 border-black hover:bg-black hover:text-white">ADD TO CART</button>
                </div>
             )
            
               )
            }
         </div>  
      </div>
   )
}
