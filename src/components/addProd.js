import React, { useState } from 'react'

const AddProd = () => {
    const [name , setName] = useState("")
    const [price , setPrice] = useState("")
    const [category , setCategory] = useState("")
    const [company , setCompany] = useState("")
    const [error , setError] = useState(false)
    const addProduct = async () =>{
        if(!name || !price || !category || !company){
            setError(true)
            return false
        }
        const userId = JSON.parse(localStorage.getItem("users"))._id
        let res =  await fetch('http://localhost:5000/add-product' , {
              method:"post",
              body:JSON.stringify({name,price,category,company,userId}),
              headers:{
                  'Content-Type':'application/json'
              }
        })
        res = await res.json()
        console.warn(res)
    }

  return (
    <div className='main-container'>
        <h2>Add Products</h2>
        <input className='inputBox' type='text' placeholder='Enter product name' value={name} onChange={(e) => {setName(e.target.value)}} />
        {error && !name && <span className='invalid'> Enter valid name *</span>}
        <input className='inputBox' type='text' placeholder='Enter product price' value={price} onChange={(e) => {setPrice(e.target.value)}} />
        {error && !price && <span className='invalid'>Enter valid price *</span>}
        <input className='inputBox' type='text' placeholder='Enter product category' value={category} onChange={(e) => {setCategory(e.target.value)}} />
        {error && !category && <span className='invalid'>Enter valid category *</span>}
        <input className='inputBox' type='text' placeholder='Enter product company' value={company} onChange={(e) => {setCompany(e.target.value)}} />
        {error && !company && <span className='invalid'>Enter valid company *</span>}
        <button type='button' className='signUp-button' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProd