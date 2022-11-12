import React from 'react';

function Card(props) {
    return (
        <div className="card" >
            <div className="cardImg">
                <img src={`https://starwars-visualguide.com/assets/img/${props.img}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                />
            </div>
            <div className="cardName">
                <h3>{props.name}</h3>
            </div>
        </div >
    );
}

export default Card