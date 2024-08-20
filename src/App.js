import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Order from './components/Order';
import ProductDetail from './components/ProductDetail';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';





const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> }, 
    { path: "Products", element: <Products /> },
    { path: "Products/:id", element: <ProductDetail /> },
    { path: "Order", element: <Order /> }
  ]);

  return routes;
};

export default App;