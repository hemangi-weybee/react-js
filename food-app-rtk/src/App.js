import { Route, Routes } from "react-router";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import ErrorPage from "./pages/ErrorPage";
import ProductListing from "./pages/ProductListing";

function App() {

  return (
    <>
      <Header />
      <div className='shop__container'>
        <Navbar />
        <div className='shop-content'>
          <Routes>
            <Route path='/' element={<ProductListing />}></Route>
            <Route path='/chocolates' element={<ProductListing chocolates />}></Route>
            <Route path='/desserts' element={<ProductListing desserts />}></Route>
            <Route path='/drinks' element={<ProductListing drinks />}></Route>
            <Route path='/ice-creams' element={<ProductListing icecreams />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
