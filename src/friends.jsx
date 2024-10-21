
import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';

export default function Friends(){
    const [user , setUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    },[])

    return(
        <div className='box'>
            <h3>Total Employes Details {user.length} </h3>
            
           {
            user.map(friend => <Friend item ={friend}></Friend>)
           }
        </div>
    )
}