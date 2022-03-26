import * as React from "react";
import {Routes,Route} from 'react-router-dom';
import HomePage from './page/Home';
import ContactPage from './page/Contact';
import AcsesPage from './page/Accsesory';
import ProductPage from './page/Products';
import ProductDetailsPage from "./page/ProductDetails";
import CartPage from './page/Cart'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Policy from "./components/Policy";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/acses" element={<AcsesPage/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/product/:idp" element={<ProductDetailsPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
      <Policy />
      <Footer />
    </>
     
  );
}

export default App;
