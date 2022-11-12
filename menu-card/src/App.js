import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RotatingSquare } from 'react-loader-spinner'

import './assets/style.scss';
import Header from './components/Header';
import MenuPage from './MenuPage';

function App() {

  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [opt, setOpt] = useState('all')

  useEffect(() => {
    axios.get('https://bridgecoursereact.s3.amazonaws.com/fakeData.json')
      .then(res => {
        setData(res.data)
        const category = [...new Set(res.data.map(ele => ele.category))]
        setCategory(['all', ...category])
        setDisplayData(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const optHandler = (e) => {
    setOpt(e.target.value)
    if (e.target.value === 'all') setDisplayData(data)
    else {
      const newData = data.filter(data => data.category === e.target.value)
      setDisplayData(newData)
    }
  }

  return (
    <div className='homepage'>
      {
        loading ?
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
          :
          <>
            <Header category={category} opt={opt} optHandler={optHandler} />
            <MenuPage data={displayData} />
          </>
      }
    </div>
  );
}

export default App;
