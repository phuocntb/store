import React, { useEffect } from 'react'
import ProductList from './store/components/ProductList'
import { useDispatch } from 'react-redux'
import Navbar from './store/components/Navbar';
export default function App() {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: Date.now(),
        name: "sp 2"
      }
    })
  }
  return (
    <div>
      <header><Navbar/></header>
      <button onClick={() => {
        handleAddProduct()
      }}>Add Product Random</button>
      <h1>APP</h1>
      <ProductList/>
    </div>
  )
}
