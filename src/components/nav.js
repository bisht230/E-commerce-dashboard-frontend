import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem("users")
  const logout = () =>{
    localStorage.clear()
    navigate('/signUp')
  }
  return (
    <div>
      {
         auth ? <ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Prod</Link></li>
            {/* <li><Link to="/update">Update Prod</Link></li> */}
            {/* <li><Link to="/profile">Profile</Link></li> */}
            <li><Link to="/login" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
         :
        <ul className='nav-ul nav-right'>
            <li><Link to='/signUp'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>

        </ul>
      }

    </div>
  )
}

export default Nav