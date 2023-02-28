import React from "react";
import Monsters from "./Monsters";

function Zone({ area, monsterList, handleDelete }) {

  const zoneMonsters = monsterList.filter(monster => monster.zone_id === area.id)

    return(
            <div id={area.id}>
                <h2><em>{area.name}</em></h2>
                <p>Region: {area.region}</p>
                <p>{area.info}</p>
                 <h3><u>Monsters</u></h3>
                <ul id='monsters'>
                    <li> {zoneMonsters.map(monster => {return (<Monsters key={monster.zone_id} monster={monster} handleDelete={handleDelete}/>)})}</li>
                </ul>
            </div>
    )
}

export default Zone;