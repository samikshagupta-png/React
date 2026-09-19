import { useState } from "react";
function SetHabits(){
     const [habits,SetHabits] =useState([]);
     const [habitname, Sethabitname] = useState([]);

    return(
        <>
        <div>
            <input 
            type="text"
            placeholder="Enter new habit  ....."
            value ={habitname}
            onChange={(e)=>Sethabitname(e.target.value)}
            >
                
            </input>
            <button onClick={SetHabits} >
                save
            </button>
        </div>

        </>
    )
}
export default SetHabits;