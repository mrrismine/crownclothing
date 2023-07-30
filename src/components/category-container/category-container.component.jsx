const CategoryContainer = ({category})=> {
   const {imageUrl, title} = category
   return(
      <div className='category-container border-2 rounded-lg p-14 mt-10 hover:scale-110 transition-transform cursor-pointer max-h-96' 
      style={{
         backgroundImage: `url(${imageUrl})`,
         backgroundSize: `1 rem`
         }} 
      >
         <div className='category-body-container text-white text-center m-10 bg-black bg-opacity-30 hover:bg-opacity-100 rounded-lg '> 
           <h1 className=' font-bold text-lg'>{title.toUpperCase()}</h1>
           <p >Shop Now</p>
         </div>
       </div>
   )
}

export default CategoryContainer