import CategoriesItem from '../../components/categories-item/categories-item.component';
import Directory from '../../components/directory/directory.components';


const Home = ()=> {
  const categories = CategoriesItem
  return (
    <div>
        <Directory categories={categories}/>
    </div>
  );
}

export default Home;
