import React from "react";

function Monsters({ monster, handleDelete }) {
    return(
        <div>
            <p>{monster.name} <button class="deleteButton" id={monster.id} onClick={handleDelete}>remove</button></p>
            <p>{monster.info}</p>
        </div>
    )
}

export default Monsters;