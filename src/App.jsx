import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path ="/" element= {<Home/>}/>
          <Route path ="/about-us" element= {<About/>}/>
          <Route path ="/products" element= {<Products/>}/>
          <Route path="/products/:id" element= {<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
