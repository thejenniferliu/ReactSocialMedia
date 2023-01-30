import React from 'react'

export default function Delete() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flash('You must be logged in to view', 'danger')
            navigate('/login')
        }
    })

    
  return (
    <div>Delete</div>
  )
}
