import React from "react";
import Monsters from "./Monsters";

function Zone({ area, handleOnClick, monsterList }) {

console.log(monsterList)
    return(
            <div id={area.id}>
                <h2><em>{area.name}</em></h2>
                <p>Region: {area.region}</p>
                <p>{area.info}</p>
                <button onClick={handleOnClick}>Monsters!!!</button>
                <p>
                    {monsterList ? monsterList.map(monster => {return (<Monsters key={monster.id} monster={monster}/>)}) : "pending"}
                </p>
            </div>
    )
}

export default Zone;