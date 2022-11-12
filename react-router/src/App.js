import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProduct from './Components/NewProduct';
import UserDetails from './Components/UserDetails';
import Users from './Components/Users';
import Admin from './Components/Admin';
import Profile from './Components/Profile';
import { AuthProvider } from './Components/auth';
import Login from './Components/Login';
import RequiredAuth from './Components/RequiredAuth';
// import About from './Components/About';

const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
        <Route path='profile' element={<RequiredAuth><Profile/></RequiredAuth>} />
        <Route path='users' element={<Users />}>
          <Route path='admin' element={<Admin />} />
          <Route path=':userID' element={<UserDetails />} />
        </Route>
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
