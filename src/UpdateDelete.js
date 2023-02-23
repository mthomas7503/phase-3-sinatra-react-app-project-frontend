import React from "react";


function UpdateDelete({userInput, handleChange}) {

    return(
        <div>
            <form >
                <input type="text" name="Creature Name" value={userInput} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default UpdateDelete;