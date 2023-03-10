import React from "react";
import Zone from "./Zone";

function Zones({zones, click, monsterList, handleDelete}) {
        return(
            <div id='zones'>
        {zones.map(
            (zone, index) => {return(<Zone key={index} area={zone} handleOnClick={click} handleDelete={handleDelete} monsterList={monsterList}/>)}
        )}
        
        </div>)
        
    }

export default Zones;