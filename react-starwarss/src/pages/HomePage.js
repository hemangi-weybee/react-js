import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header';
import HomepageCard from '../component/HomepageCard';
import NavBar from '../component/NavBar';

function HomePage() {
  return (
    <div>
      <Header/>
      <NavBar/>
      {
          <main className='homepageAllCards'>
            <Link to='/characters'><HomepageCard img={'/images/character.jpg'} name={'Characters'} /></Link>
            <Link to='/films'><HomepageCard img={'/images/films.jpg'} name={'films'} /></Link>
            <Link to='/planets'><HomepageCard img={'/images/planets.jpg'} name={'planets'} /></Link>
            <Link to='/species'><HomepageCard img={'/images/species.jpg'} name={'species'} /></Link>
            <Link to='/starships'><HomepageCard img={'/images/starships.jpg'} name={'starships'} /></Link>
            <Link to='/vehicles'><HomepageCard img={'/images/vehicles.jpg'} name={'vehicles'} /></Link>
          </main>
      }
    </div>
  );
}

export default HomePage