import React from 'react'
import { useSelector } from 'react-redux'
export default function ProductList() {
    const store = useSelector(store => store)
  return (
    <div>
        <h2>ProductList</h2>
        <ul>
            {
                store.data?.map((product, index) =>  <li key={Date.now() * Math.random()}>{index + 1} ProductName { product.name }</li>)
            }
        </ul>
    </div>
  )
}
