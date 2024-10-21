import { useEffect, useState } from "react";

export default function Students(){
    const [value , setValue] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setValue(data))
    },[])
    return(
        <div style={{
            margin:'10px',
            padding:'10px',
            border:'1px solid orange'
        }}>
            <h3>Total users {value.length} </h3>
        </div>
    )
}