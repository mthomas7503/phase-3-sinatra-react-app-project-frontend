import React from "react";


function UpdateDelete({name, zone, info, handleNameAdd, handleZoneAdd, handleInfoAdd, handleSubmit, nameUpdate, zoneUpdate, infoUpdate, handleInfoUpdate, handleZoneUpdate, handleNameUpdate}) {

    return(
        <div>
            Add a new monster!
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameAdd}/>
                </label>
               <label>
                    Zone:
                    <input type="text" value={zone} onChange={handleZoneAdd}/>
               </label>
               <label>
                    Info:
                    <input type="text" value={info} onChange={handleInfoAdd}/>
               </label>
            <button type="submit"> Add Monster</button>
            </form>
            Or update an existing one
            <form>
                <label>
                    Name:
                    <input type="text" value={nameUpdate} onChange={handleNameUpdate}/>
                </label>
                <label>
                    Zone: 
                    <input type="text" value={zoneUpdate} onChange={handleZoneUpdate}/>
                </label>
                <label>
                    Info:
                    <input type="text" value={infoUpdate} onChange={handleInfoUpdate}/>
                </label>
                <button type="submit">Update Monster</button>
            </form>
        </div>
    )
}

export default UpdateDelete;