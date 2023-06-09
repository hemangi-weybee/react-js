import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../component/Header';
import HomepageCard from '../component/HomepageCard';
import NavBar from '../component/NavBar';

function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <NavBar />
      {
        <main className='homepageAllCards'>
          <div onClick={() => navigate('/people?page=1')}><HomepageCard img={'/images/character.jpg'} name={'Characters'} /></div>
          <div onClick={() => navigate('/planets?page=1')}><HomepageCard img={'/images/planets.jpg'} name={'planets'} /></div>
          <div onClick={() => navigate('/films?page=1')}><HomepageCard img={'/images/films.jpg'} name={'films'} /></div>
          <div onClick={() => navigate('/species?page=1')}><HomepageCard img={'/images/species.jpg'} name={'species'} /></div>
          <div onClick={() => navigate('/vehicles?page=1')}><HomepageCard img={'/images/vehicles.jpg'} name={'vehicles'} /></div>
          <div onClick={() => navigate('/starships?page=1')}><HomepageCard img={'/images/starships.jpg'} name={'starships'} /></div>
        </main>
      }
    </div>
  );
}

export default HomePage