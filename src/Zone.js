import React from "react";
import Monsters from "./Monsters";

function Zone({ area, monsterList, handleDelete }) {

   const zoneMonsters = monsterList.filter(monster => monster.zone_id === area.id)

console.log(monsterList)
    return(
            <div id={area.id}>
                <h2><em>{area.name}</em></h2>
                <p>Region: {area.region}</p>
                <p>{area.info}</p>
                <ul>
                    <li> {monsterList ? zoneMonsters.map(monster => {return (<Monsters key={monster.zone_id} monster={monster} handleDelete={handleDelete}/>)}):<p>Scroll to the bottom to show monsters for this region.</p>}</li>
                </ul>
            </div>
    )
}

export default Zone;