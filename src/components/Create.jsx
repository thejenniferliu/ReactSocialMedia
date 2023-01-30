import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePosts(props) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flash('You must be logged in to view', 'danger')
            navigate('/login')
        }
    })

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(e)
        //get data from the form
        let title = e.target.title.value
        let content  = e.target.content.value

        //get the token from local storage
        let token = localStorage.getItem('token')
        
        //set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`)
        myHeaders.append('Content-Type', 'application/json')
       

        //set up request body
        let requestContent = JSON.stringify({title, content})

        let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts", {
            method: "POST",
            headers: myHeaders,
            body: requestContent
        })

        if (response.ok){
            let data = await response.json();
            props.flash(`${data.title} has been created`, 'primary')
            navigate('/')
        } else {
            props.flash('There was an issue, please try again', 'warning')
        }
    }

  return (
    <>
        <h3 className = 'text-center my-5'>Create a New Post</h3>
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-4'>
                    <img src = "https://thumbs.gfycat.com/DisfiguredMadeupGuernseycow-max-1mb.gif"></img>
                </div>
                <div className = 'col-8'>
                    <form action = "" onSubmit = {handleSubmit}>
                    
                        <div className = 'form-group'>
                        <input type = 'text' className = 'form-control my-4 w-60' placeholder ='Enter title' name ='title' />
                            <input type = 'text' className = 'form-control my-5 w-60' placeholder ='Enter content' name ='content' />

                            <input type = 'submit' value = 'Write something' className ='btn btn-light w-50 my-3' />
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    </>

  )
}
