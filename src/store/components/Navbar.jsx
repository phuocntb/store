import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const {productStore, countStore} = useSelector(store => store)
  return (
    <div>Navbar Cart {productStore.data?.length} Count: {countStore}</div>
  )
}
