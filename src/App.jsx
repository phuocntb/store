import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function App() {
  const store = useSelector((store) => {
    return store
  })

  useEffect(() => {
    console.log('store', store)
  }, [store])
  return (
    <div>App</div>
  )
}
