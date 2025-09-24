import React from 'react'

function RegisForm() {







  return (
    <form action="">
        <label htmlFor="regisUsername">Create your Username</label>
        <input type="text" name='regisUsername' placeholder='Create your new Username here' required  />
        <label htmlFor="createPassword">Create your Password</label>
        <input type="password" name='createPassword' placeholder='Type your secret password here' required/>
        
        <button className='RegisBtn'>Register</button>
    </form>
  )
}

export default RegisForm