import React from "react";

function Zone({ area, handleOnClick }) {
    console.log(area)

    return(
            <div>
                <h2><em>{area.name}</em></h2>
                <p>Region: {area.region}</p>
                <p>{area.info}</p>
                <button id={area.id} onClick={handleOnClick}>Monsters!!!</button>
            </div>
    )
}

export default Zone;