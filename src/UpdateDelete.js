import React from "react";


function UpdateDelete({name, zone, info, handleNameAdd, handleZoneAdd, handleInfoAdd}) {

    return(
        <div>
            <form >
                <label>
                    Name:
                    <input type="text" name="Creature Name" value={name} onChange={handleNameAdd}/>
                </label>
               <label>
                    Zone:
                    <input type="text" name="Creature Name" value={zone} onChange={handleZoneAdd}/>
               </label>
               <label>
                    Info:
                    <input type="text" name="Creature Name" value={info} onChange={handleInfoAdd}/>
               </label>

            </form>
        </div>
    )
}

export default UpdateDelete;