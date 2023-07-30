import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.page";
import NavigationBar from "./routes/navigation/navigation.page";
import SignIn from "./routes/authentication/authentication.page";
import ShopPage from "./routes/shop/shop.page";

const App = ()=> {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>

    </Routes>
    
  );
}

export default App;
