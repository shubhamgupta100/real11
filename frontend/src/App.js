import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewProduct from "./components/Admin/NewProduct";
import Navbar from "./components/Header/Navbar";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/Cart/Cart";
import LoginSignUp from "./components/User/LoginSignUp";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/products/new" element={<NewProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
