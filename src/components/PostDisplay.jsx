import React from 'react'
import { Link } from 'react-router-dom' 


// its post so we dont have to write props every time
export default function PostCard({post}) {
  return (
    <div className="row">

            <div className="card text-center">
                <div className="card-header">
                {post.title}
                </div>
                <div className ="card-body">
                    <h5 className="card-title">{post.content}</h5>
                    <p className="card-text">{post.date_created}</p>
                    <Link className = 'btn btn-light' to = {'/wholepost/'+ post.id}>See More</Link>           
                </div>
            </div>
     
    </div>
  )
}
