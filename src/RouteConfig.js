import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';

const RouteConfig = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductItem />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default RouteConfig