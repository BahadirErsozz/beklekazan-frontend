import Navbar from "./components/navbar"
import LeftNavigation from "./components/LeftNavigation"
import ProductList from "./components/ProductList"
import { useState } from "react"
import { useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"

function App() {
  const [products, setProducts] = useState([])
  const [shopingCart, setShoppingCart] = useState([])

  useEffect(() => {
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "elma", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "çilek", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4()}]
    })
  }, [])
  return(
    <>
    <Navbar></Navbar>
    <div style={{display: "flex" , height: "100%"}}>
    <LeftNavigation></LeftNavigation>
    <ProductList products={products}></ProductList>
    <ShoppingCart></ShoppingCart>
    </div>
    </>
  )
}

export default App
