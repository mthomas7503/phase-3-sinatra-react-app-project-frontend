import React from "react";

function Monsters({ monster }) {
console.log(monster)
    return(
        <div>
            <p>{monster.name}</p>
            <p>{monster.info}</p>
            <p></p>
        </div>
    )
}

export default Monsters;