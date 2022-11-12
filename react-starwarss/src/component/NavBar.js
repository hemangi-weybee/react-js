import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className='navBar'>
      <Link to='/'>home</Link>
      {
        props.type ?
          props.id ?
            (<> / <Link to={`/${props.type}`}> {props.type}</Link> / <span> {props.id}</span> </>)
            : (<> / <Link to={`/${props.type}`}> {props.type}</Link></>)
          : null
      }
    </nav>
  );
}

export default NavBar