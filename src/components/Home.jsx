import React, { useState, useEffect } from 'react'
import PostDisplay from './PostDisplay'

export default function Home() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
 
    return (
        <>
        <div className = 'text-center'>
             <h1 className = 'text-center my-5'> This is Social Media? </h1>
             {posts.map( post => <PostDisplay key = {post.id} post = {post}/>)}
        </div>
        </>
   
  )
}
