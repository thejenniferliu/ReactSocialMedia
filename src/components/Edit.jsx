import React from 'react'

export default function edit() {
  const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flash('You must be logged in to view', 'danger')
            navigate('/login')
        }
    })

    const handleEdit = async e => {
      e.preventDefault()
      console.log(e)
     
      let titleedit = e.target.title.value
      let contentedit  = e.target.content.value
      let username = e.target.username.value
      let password = e.target.password.value
      let stringToEncode = `${username}:${password}`


      let token = localStorage.getItem('token')
      

      let myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${btoa(stringToEncode)}`)
      myHeaders.append('Content-Type', 'application/json')
     

      //set up request body
      let requestContent = JSON.stringify({title, content})

      let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts", {
          method: "PUT",
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
    <div>edit</div>
  )
}
