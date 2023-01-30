import React, { useState, useEffect } from 'react'
import PostDisplay from './PostDisplay'
import { useParams } from 'react-router-dom'

export default function WholePost() {

//postid is what was passed in the url from postdisplay
//render mechanism of react and async calls to mesh properly.


    const {postid} = useParams()
    
    const [post, setPost] = useState()


    useEffect(() => {
        console.log('its happening')
        // fetch(`https://responsible-knowledgeable-restaurant.glitch.me/blog/posts`)
        //     .then(res => res.json())
        //     .then(data => {
        //         const postToView = data[3]
                
        fetch (`https://responsible-knowledgeable-restaurant.glitch.me/blog/posts/${postid}`)
            .then(res => res.json() )
            .then(data => setPost(data))
            console.log('it fetched')
            
    },[])

    
 
    return (
        <>
            <div className = 'text-center'>
                <h3 className = 'text-center my-5'> Why does it only work sometimes? </h3>
                <div className="row">

                    <img src = "https://i.pinimg.com/originals/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg" className = 'img-fluid mb-3'/>
                    <div className="card text-center">
                        <div className="card-header">{post.title}</div>
                            <div className ="card-body">
                                <h5 class="card-title">{post.content}</h5>
                                <p class="card-text">{post.date_created}</p>
                            </div>
                    </div>

                </div>
            </div>
        </>     
   
  )
}