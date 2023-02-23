import React from "react";
import Zone from "./Zone";

function Zones({zones, click, monsterList, handleDelete}) {
        return(
            <div>
        {zones.map(
            (zone, index) => {return(<Zone key={zone.id} area={zone} handleOnClick={click} handleDelete={handleDelete} monsterList={monsterList}/>)}
        )}
        <button onClick={click}>Click here to show all monsters for each zone!!!</button>
        </div>)
        
    }

export default Zones;