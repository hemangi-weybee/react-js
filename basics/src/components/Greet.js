import React from "react";

// function Greet () {
//     return <h1> Hello Sir </h1>;
// }

const Greet = props => {
    console.log(props.children)
    return (
        <div>
            <h1> {props.name} : Previously on the Vampire Diaries! </h1>
            {/* <h5> {props.children}</h5> */}
        </div>
    )
};

export default Greet;