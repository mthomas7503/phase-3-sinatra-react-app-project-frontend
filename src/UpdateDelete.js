import React from "react";


function UpdateDelete({name, zone, info, handleNameAdd, handleZoneAdd, handleInfoAdd, handleSubmit}) {

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
            <button type="submit"> Add Monster</button>
            </form>
        </div>
    )
}

export default UpdateDelete;