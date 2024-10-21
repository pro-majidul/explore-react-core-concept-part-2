import { useEffect, useState } from "react"
import './Posts.css'
import Post from "./Post";

 export default function Posts(){

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data))
    },[])
    return(
        <div className="post">
            <h3>Posts</h3>
            {
                    posts.map(posts=> <Post post={posts}></Post>)
            }
           
        </div>
    )
}