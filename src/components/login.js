import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
     const auth = localStorage.getItem("users")
     if(auth){
        navigate('/')
     }
  }, [])
  
  //we use async when a promise will return 
  const loginHandle = async () =>{
      console.warn(email,password)
      let result = await fetch('http://localhost:5000/login' , {
       method : 'post',
       body : JSON.stringify({email,password}),
       headers : {
           'Content-Type' : 'application/json'
       }
      })
      result = await result.json()
      if(result.email){
         localStorage.setItem("users" , JSON.stringify(result))
         navigate('/')
      }
      else{
        alert('No user found in the database')
      }
  }
  return (
    <div className='login'>
        <h2>Login</h2>
        <input className='inputBox' type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input className='inputBox' type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button type='button' className='signUp-button' onClick={loginHandle}>Login</button>
        
    </div>
  )
}

export default Login