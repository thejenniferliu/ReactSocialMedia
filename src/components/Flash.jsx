import React from 'react'

//triple function passing... flashMessage started on the apps.js and we passing dis function
export default function Flash({message, category, flash}) {
  return (
    <div className={`alert alert-${category} alert-dismissable fade show`} role = "alert">
        <strong>{message}</strong>
        <button className = 'btn-close' onClick={() => flash(null, null)} />
    </div>
  )
}