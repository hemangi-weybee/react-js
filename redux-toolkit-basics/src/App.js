import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingSquare } from 'react-loader-spinner';

import './assets/style.scss';
import { fetchMenu } from './redux/indexSlice';
import Header from './components/Header';
import MenuPage from './MenuPage';
import Navbar from './components/Navbar';

function App() {

  const data = useSelector(state => state.menu)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [])

  return (
    <div className='homepage'>
      {
        data.loading ?
          <div className='loader'>
            <RotatingSquare
              height="100"
              width="100"
              color="#b0988b"
              ariaLabel="rotating-square-loading"
              strokeWidth="4"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          : data.error ? <div>  {data.error}  </div>
            :
            <>
                <Header />
                <Navbar category={data.category} ></Navbar>
              <MenuPage data={data.item}></MenuPage>
            </>
      }
    </div>
  );
}

export default App;

/////Dispatch 
// import { cakeAction, icecreamAction } from "./redux/indexSlice";

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(2))