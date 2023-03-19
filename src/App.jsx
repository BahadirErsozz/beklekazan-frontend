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
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100, category: "Meyve"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "elma", id: uuidv4(), price: 100, category: "Sebze"}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "çilek", id: uuidv4(), price: 100}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    })
    setProducts(oldArray => {
      return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
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
    <div style={{backgroundImage: "url(https://images.deliveryhero.io/image/fd-tr/LH/g3w6-hero.jpg)", height: "272px", display: "block", width: "100%", backgroundSize: "cover"}}></div>
    <div style={{height: "69px", display: "block", width: "100%", backgroundSize: "cover", borderBottom: "solid 1px #dcdcdc", }}> Some Text</div>
    <div style={{display: "flex" , height: "100%"}}>
    <LeftNavigation setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigation>
    <ProductList products={products} addItemToCart={addItemToCart} selectedCategory={selectedCategory}></ProductList>
    
    </div>
    <ShoppingCart shoppingCart={shoppingCart}></ShoppingCart>
    </>
  )
}

export default App
