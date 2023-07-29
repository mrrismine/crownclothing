import { useContext } from 'react';

import CategoriesItem from '../../components/categories-item/categories-item.component';
import Directory from '../../components/directory/directory.components';
import { UserContext } from '../../contexts/user.contexts';

const Home = ()=> {
  const categories = CategoriesItem

  const {currentUser} = useContext(UserContext)

  if(!currentUser) {
    return (
      <div>
          <Directory categories={categories}/>
      </div>
    );
  }
  const {email, uid} = currentUser
  return(
    <div>
          <Directory categories={categories}/>
          <h1>welcome {email}, {uid}</h1>
    </div>
  )
}

export default Home;
