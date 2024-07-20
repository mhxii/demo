import React from "react";
import Counter from "./Counter";

function Tweet(props){
    return(
        <div>
            <p>Le cour de {props.cour} est {props.comment}</p>
            <Counter/>
        </div>
    );
}

export default Tweet;