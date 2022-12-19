import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
const UpdateComponent = () => {
    const [name , setName] = useState("")
    const [price , setPrice] = useState("")
    const [category , setCategory] = useState("")
    const [company , setCompany] = useState("")
    const [error , setError] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getProductDetails()
    }, [])
    
    const getProductDetails = async () => {
        let result = await fetch (`http://localhost:5000/products/${params.id}`)
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () =>{
        console.warn({name , price , category ,company})
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            method : 'put',
            body : JSON.stringify({name , price , category ,company}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        result = await result.json()
        console.warn(result)
        navigate('/')
    }

  return (
    <div className='main-container'>
        <h2>Update Products</h2>
        <input className='inputBox' type='text' placeholder='Enter product name' value={name} onChange={(e) => {setName(e.target.value)}} />
        <input className='inputBox' type='text' placeholder='Enter product price' value={price} onChange={(e) => {setPrice(e.target.value)}} />
        <input className='inputBox' type='text' placeholder='Enter product category' value={category} onChange={(e) => {setCategory(e.target.value)}} />
        <input className='inputBox' type='text' placeholder='Enter product company' value={company} onChange={(e) => {setCompany(e.target.value)}} />
        <button type='button' className='signUp-button' onClick={updateProduct}>Update Product</button>
    </div>
  )
}

export default UpdateComponent