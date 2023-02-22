import React from "react";
import Zone from "./Zone";

function Zones({zones, click}) {
    console.log(zones)
        return(
            <div>
        {zones.map(
            (zone, index) => {return(<Zone key={zone.id} area={zone} handleOnClick={click} />)}
        )}
    
        </div>)
        
    }

export default Zones;