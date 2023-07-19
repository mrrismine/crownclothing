import CategoryContainer from "../category-container/category-container.component"

const Directory = (props) => {
   const {categories} = props
   return(
      <div className="categories-container grid grid-cols-3 justify-between m-16 gap-5">
      {categories.map((category)=> {
          return(
              <CategoryContainer category={category} key={category.id}/>
          )
        })}      
    </div>
   )
}

export default Directory