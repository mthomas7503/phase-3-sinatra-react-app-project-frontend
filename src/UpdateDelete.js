import React from "react";


function UpdateDelete({name, zone, info, handleNameAdd, handleZoneAdd, handleInfoAdd, handleSubmit}) {

    return(
        <div>
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
        </div>
    )
}

export default UpdateDelete;