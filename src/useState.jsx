import { useState } from 'react'
export default function UseState(){
    const [count ,setCount]= useState(0);
    function handelAdd(){
        const newCount = count +1;
        setCount(newCount)
    }

    function handelRemove(){
        const newCount = count -1;
        setCount(newCount)
    }
    return(
        <div style={{
            border:'1px solid blue',
            margin:'10px',
            padding:'10px'
        }}>
            <h3>Count : {count}</h3>
            <button onClick={handelAdd}>add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}