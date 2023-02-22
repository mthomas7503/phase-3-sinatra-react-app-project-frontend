import React from "react";
import Zone from "./Zone";

function Zones({zones, click, monsterList}) {
        return(
            <div>
        {zones.map(
            (zone, index) => {return(<Zone key={zone.id} area={zone} handleOnClick={click} monsterList={monsterList}/>)}
        )}
    
        </div>)
        
    }

export default Zones;