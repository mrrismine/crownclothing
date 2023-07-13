
import './App.css';

import CategoryContainer from './components/category-container/category-container.component';
import CategoriesItem from './components/categories-item/categories-item.component';
import Directory from './components/directory/directory.components';

const App = ()=> {
  const categories = CategoriesItem

  return (
    
        <Directory categories={categories} CategoryContainer={CategoryContainer}/>

  );
}

export default App;

/* <div className='fixed bg-slate-600 top-0 h-8 opacity-40 w-screen flex flex-row justify-around'>
  <p className='text-white'> 
    Header
  </p>
  <p className='text-white'> 
    Header
  </p>
  <p className='text-white'> 
    Header
  </p>
  <p className='text-white'> 
    Header
  </p> 
</div> */