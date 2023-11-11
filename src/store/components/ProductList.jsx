import React from 'react'
import { useSelector } from 'react-redux'
export default function ProductList() {
    const productStore = useSelector(store => store.productStore)
  return (
    <div>
        <h2>ProductList</h2>
        <ul>
            {
                productStore.data?.map((product, index) =>  <li key={Date.now() * Math.random()}>{index + 1} ProductName { product.name }</li>)
            }
        </ul>
    </div>
  )
}
