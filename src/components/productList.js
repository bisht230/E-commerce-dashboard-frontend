import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    
    const [products , setProducts] = useState([])    //stuck in useState([])
    useEffect(() => { 
       getProducts()
    } , [])

    const getProducts = async () => {
        let prod = await fetch ('http://localhost:5000/products')
        prod = await prod.json();
        setProducts(prod)
    }
    const deleteProduct = async (id) => {
       let result = await fetch(`http://localhost:5000/products/${id}` , {
        method : 'Delete'
       })
       result = await result.json()
       if(result){
         alert("Record is deleted")
         getProducts()
       }
    }
    const searchHandle = async (e) =>{
       let key = e.target.value 
       if(key){
       let result = await fetch(`http://localhost:5000/search/${key}`, {
          method : 'get',
       })
       result = await result.json()
       if(result){
        setProducts(result)
       }
       }
       else{
        getProducts()
       }
    }
  return (
    <div className='main-container-2'>
        <h2>Product List</h2>
        <input type='text' placeholder='Search Product' className='inputBox' onChange={searchHandle}></input>
        <ul className='productListing'>
            <li>S.no</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Operation</li>
        </ul>
        {
        products.length > 0 ? products.map ((item , index) => 
        <ul className='productListing' key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price} ₹</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button type='button' className='delete-button' onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={'/update/'+item._id}>Update</Link>
              </li>
        </ul>
        )
        :
        <h1>No Result Found !!</h1>
      } 
        
    </div>
  )
}

export default ProductList