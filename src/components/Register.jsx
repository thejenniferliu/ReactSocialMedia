import React, { Component } from 'react'
import { createRenderer } from 'react-dom/test-utils';
import { Navigate } from 'react-router-dom';

 
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        
    }
    handleRegister = event => {
        event.preventDefault();
        let password = event.target.password.value
        let confirmPass = event.target.confirmPass.value
        if (password !== confirmPass){
            this.props.flash('passwords do not match', 'danger')
        } else {
            // console.log('passwords match')

            //set up the request
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
            })

            // the url is the first argument, and then the rest of it is the rest
            fetch("https://responsible-knowledgeable-restaurant.glitch.me/auth/users", {
                method: "POST",
                headers: myHeaders,
                body: formData
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        this.props.flash(data.error, 'danger')
                    } else {
                       this.props.flash(`${data.username} has been created`, 'success')
                        this.setState({
                            redirect: true
                        })
                    }
                })

    }
}

  render() {
    return (
    <>
        {this.state.redirect ? <Navigate to ='/' /> : 
        <>
             <h3 className="text-center my-5">Register</h3>   

                    
            
            
                    <form action = "" onSubmit = {this.handleRegister}>
                    <div className = 'text-center justify-content-center'>
                            <div className = 'form-group'>

                                    <input type="text" className="form-control my-3 w-60" placeholder = 'enter email' name = 'email' />
                                    <input type="text" className="form-control my-3 w-60" placeholder = 'enter username' name = 'username' />
                                    <input type="password" className="form-control my-3 w-60" placeholder = 'enter password' name = 'password' />
                                    <input type="password" className="form-control my-3 w-60" placeholder = 'confirm password' name = 'confirmPass' />
                            
                        
                                    <input type ='submit' value ='register' className = 'btn btn-light w-50'></input>
                            
                            </div>
                      </div>  
                    </form>

                    <img src ="https://art.pixilart.com/10b29ad81cd53b8.gif" className = 'img-fluid' />

        </>
        }
    </>
    )
  }
}
