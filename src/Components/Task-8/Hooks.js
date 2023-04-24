import React, { useState } from "react";




export function Hooks(){
    const[counter,setCounter] = useState(0);
        return(
            <>
                <h1>{counter}</h1>
                <button type = "button" value = "" onClick={()=>setCounter(counter+1)}>INCREMENT</button>
                <button type = "button" value = "" onClick={()=>setCounter(counter-1)}>DECREMENT</button>
                <button type = "button" value = "" onClick={()=>setCounter(counter*0)}>RESET</button>
            </>
        );
}