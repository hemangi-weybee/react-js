import React from 'react';

function HomepageCard(props) {
    return (
        <div className="homeCard" >
            <div className="cardImg"><img src={props.img} />
            </div>
            <div className="cardName">
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}

export default HomepageCard