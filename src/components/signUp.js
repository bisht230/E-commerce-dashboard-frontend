import React, { useState , useEffect } from 'react'
//useNavigate is a hook which is used for the navi
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
const [name , setName] = useState("")
const[password , setPassword] = useState("")
const[email , setEmail] = useState("")

const navigate = useNavigate()
useEffect(() =>{
  const auth = localStorage.getItem('users')
  if(auth){
    navigate('/')
  }   
})

const collectData = async () =>{
    
   
    console.warn(name,email,password)
    //using of fetch :- it is the core module for API integrate
    let result = await fetch('http://localhost:5000/signUp' , {
      method : 'post',
      body : JSON.stringify({name,email,password}),
      headers : {
          'Content-Type' : 'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("users" , JSON.stringify(result))
    navigate('/')

}
  return (
    <div className='main-container'>
      <h2 className='signUpText'>Sign Up</h2>
      <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
      <input className='inputBox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
      <input className='inputBox' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
      <button type='button' className='signUp-button' onClick={collectData}>Sign Up</button>
    </div>
  )
}

export default SignUp