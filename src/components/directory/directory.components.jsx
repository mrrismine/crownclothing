const Directory = (props) => {
   const {categories, CategoryContainer} = props
   return(
      <div className="categories-container grid grid-cols-3 justify-between m-16 gap-5">
      {categories.map((category)=> {
          return(
              <CategoryContainer category={category}/>
          )
        })}
      
    </div>
   )
}

export default Directory