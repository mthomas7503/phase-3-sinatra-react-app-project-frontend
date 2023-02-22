import React from "react";

function Monsters({ monster }) {
console.log(monster)
    return(
        <div>
            <p>{monster.name}</p>
        </div>
    )
}

export default Monsters;