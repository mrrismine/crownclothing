import { useNavigate } from "react-router-dom"

const ProductPreview = ({title, product, addItemToCart}) => {
   const navigate = useNavigate()
   
   const onClickHandler = () => {
      navigate(`./${title}`)
   }
   return(
      <>
                     <h1 className=" font-bold text-4xl mt-5">
                        <span onClick={onClickHandler} className=" cursor-pointer">
                           {title.toLocaleUpperCase()}
                        </span>
                     </h1>
                     <div className="grid grid-cols-4 align-middle relative">
                        {
               
                           product
                           .filter((_,idx) => idx < 4) 
                           .map((product) => {
                              const addToCartHandler = () => {
                              addItemToCart(product)

                              }

                              return (
                              <div className=' flex flex-col mt-10 ml-8 ' key={product.id}>
                              <img alt={product.name} src={product.imageUrl} className="h-96 w-96 cursor-pointer hover:scale-90 transition-transform " />

                              <div className=" flex flex-row justify-between font-mono"> 
                                 <h1 className=" ">{product.name}</h1>
                                 <h1>Price : ${product.price}</h1>
                              </div>
                              <button className=" font-mono font-extrabold text-lg bg-slate-200 rounded-lg p-1 border-2 border-black hover:bg-black hover:text-white"
                              onClick={addToCartHandler}
                              >ADD TO CART</button>
                              </div> 
                           )})
                        }
                     </div>

                  </>
   )
}

export default ProductPreview