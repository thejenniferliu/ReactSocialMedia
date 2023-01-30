import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login(props) {

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        //get data from form - need to login and do someting with tokens
        let username = e.target.username.value
        let password = e.target.password.value
        let stringToEncode = `${username}:${password}`

     
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${btoa(stringToEncode)}`)
   
        let response = await fetch('https://responsible-knowledgeable-restaurant.glitch.me/auth/token', {
            headers: myHeaders,
            method: "POST"
        })
        
        if (response.ok){
            let data = await response.json()
     
            let token = data.token
            let expiration = data.token_expiration;
       
            localStorage.setItem('token', token)
            localStorage.setItem('tokenExp', expiration)
      
            props.flash('You have sucessfully logged in', 'success')
            props.logUserIn()
            navigate('/')

        } else {
           props.flash('Your username and/or password are incorrect', 'danger')
        }

    }


  return (

    <>
     <h3 className = 'text-center my-5'> Login </h3>
        <form action = "" onSubmit = {handleSubmit}>
            <div className = 'text-center'>
                <div className = 'form-group'>
                    <input type =  'text' className = 'form-control my-3 w-60' placeholder ='Enter Username' name ='username' />
                    <input type =  'password' className = 'form-control my-3 w-60' placeholder ='Enter Password' name ='password' />

                    <input type = 'submit' value = 'log in' className ='btn btn-light w-50' />
                </div>
                <img src="https://img.freepik.com/premium-vector/pixel-art-symbol-message-with-heart-white-background_69210-362.jpg"></img>
             </div>
        </form>
    
    
    </>
    
  )
}
