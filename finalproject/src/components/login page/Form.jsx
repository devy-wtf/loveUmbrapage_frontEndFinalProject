import React from 'react'

function Form() {
  return (
    <form action="">
        <label htmlFor="Username">Username</label>
        <input type="text" name='Username' placeholder='Your username goes here' required/>
        <label htmlFor="password">Password</label>
        <input type="text" name='password' placeholder='Your password goes here' required/>
        
        <button className='loginBtn'>Login</button>
      
        <label htmlFor="registerPageBtn">Wanna register?</label>
        <button className='registerPageBtn'></button>
       
    </form>
    
  )
}

export default Form