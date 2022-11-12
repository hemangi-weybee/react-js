import React from "react";

const Hello = (props) => {
    // return (
    //     <div className='header'>
    //         <h1> Hi ! </h1>
    //     </div>
    // )
    
    const {name, from} = props;


    //Without using JSX
    return React.createElement(
        'div', {id: 'greet', className: 'header'},
        React.createElement('h3', props, `${from} : Hello ${name}!`))
}

export default Hello;