import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'

//outlet will handle the props
const Privatecomponent = () => {
    const auth = localStorage.getItem('users')
    return auth?<Outlet /> : <Navigate to='/signUp' />
}

export default Privatecomponent