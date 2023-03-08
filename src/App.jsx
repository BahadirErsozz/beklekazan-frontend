import Navbar from "./components/navbar"
import LeftNavigation from "./components/LeftNavigation"
import ProductList from "./components/ProductList"
import { useState } from "react"
import { useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"

function App() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL", category: "Meyve"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "elma", id: uuidv4(), price: "100 TL", category: "Sebze"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "çilek", id: uuidv4(), price: "100 TL"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: "100 TL"}]
    })
  }, [])
  const addItemToCart = (id) =>{
    setShoppingCart(oldArray => {
      return [...oldArray, products.find(product => product.id === id)]
    })
  }
  return(
    <>
    <Navbar></Navbar>
    <div style={{display: "flex" , height: "100%"}}>
    <LeftNavigation setSelectedCategory={setSelectedCategory}></LeftNavigation>
    <ProductList products={products} addItemToCart={addItemToCart} selectedCategory={selectedCategory}></ProductList>
    <ShoppingCart shoppingCart={shoppingCart}></ShoppingCart>
    </div>
    </>
  )
}

export default App
