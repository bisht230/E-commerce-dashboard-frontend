import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import './App.css'
import Footer from './components/footer'
import SignUp from './components/signUp'
import Privatecomponent from './components/privatecomponent'
import Login from './components/login'
import AddProd from './components/addProd'
import ProductList from './components/productList'
import UpdateComponent from './components/updateComponent'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
     <Route element={<Privatecomponent/>}>
     <Route path='/' element={<ProductList />} />
     <Route path='/add' element={<AddProd />} />
     <Route path='/update/:id' element={<UpdateComponent />} />
     <Route path='/logout' element={<h1>Logout Component</h1>} />
     <Route path='/profile' element={<h1>Profile Component</h1>} />
     </Route>
     <Route path='/signup' element={<SignUp />}/>
     <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App