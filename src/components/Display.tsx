import React from "react";

const Display = (props: any) => {
    return(
        <div>
            <h2>Current Temp in {props.city}: {props.temperature}</h2>
            <h2>What is the weather like in {props.city}? {props.weather}</h2>
        </div>
    )
}

export default Display;