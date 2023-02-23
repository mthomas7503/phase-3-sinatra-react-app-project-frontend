import React from "react";

function Monsters({ monster, handleDelete }) {
    return(
        <div>
            <p>{monster.name}<button id={monster.id} onClick={handleDelete}>x</button></p>
            <p>{monster.info}</p>
        </div>
    )
}

export default Monsters;