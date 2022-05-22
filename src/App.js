import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Products from "./Components/Products";
import "./App.css";
import Toggler from "./Components/Toggler";
import { ShoeProvider } from "./Context/ShoeContext";

const App = () => {
  return (
    <ShoeProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Toggler />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </Router>
    </ShoeProvider>
  )
}

export default App;