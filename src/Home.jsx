import Navbar from "./components/Navbar/Navbar"
import LeftNavigation from "./components//LeftNav/LeftNavigation"
import ProductList from "./components//Products/ProductList"
import { useState } from "react"
import { useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function Home() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [clickedLogin, setclickedLogin] = useState(false)
  const [clickedRegister, setclickedRegister] = useState(false)
  const [orders, setOrders] = useState([])
  const [updateOrders, setupdateOrders] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState("")
  useEffect(() => {
    fetch('http://localhost:3000/products',{
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((data) => {
          console.log("wtf")
          for (let i = 0; i < data.length; i++) {
            setProducts(oldArray => {
              return [...oldArray, {name: data[i].name, id: uuidv4(), price: data[i].price, category: "Meyve", deadline: data[i].deadline}]
            })}
         })
         .catch((err) => {
            console.log(err);
         });
    fetch('http://localhost:3000/users/isLoggedIn',{
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((data) => {
          console.log("isloggedin: " + data.isLoggedIn)
          setIsLoggedIn(data.isLoggedIn)
          setLoggedInUser(data.email)
         })
         .catch((err) => {
            console.log(err);
         });     
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100, category: "Meyve"}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "elma", id: uuidv4(), price: 100, category: "Sebze"}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "çilek", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
  }, [])
  const addItemToCart = (id) =>{
    setShoppingCart(oldArray => {
      return [...oldArray, products.find(product => product.id === id)]
    })
  }
  const handleClickLogin = () => {
      setclickedLogin(true)
      setclickedRegister(false)
  }
  const handleClickRegister = () => {
    setclickedRegister(true)
    setclickedLogin(false)
}
  const handleQuitLogin = () => {
    setclickedLogin(false)
  }
  const handleQuitRegister = () => {
    setclickedRegister(false)
  }
  useEffect(() => {
    fetch('http://localhost:3000/orders')
         .then((res) => res.json())
         .then((dataa) => {
          console.log("hey" + dataa)
          setOrders(dataa.orders)
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [updateOrders]) 
  const addOrder = async () => {
    return await fetch(
      "http://localhost:3000/orders",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({shoppingCart: shoppingCart, orderDate: Date.now(), orderStatus: 0}),
      }
    ).then((data) => setupdateOrders(updateOrders + 1));
  }
  const login = async (email, password) => {
    return await fetch(
      "http://localhost:3000/users/login",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message)
      setIsLoggedIn(data.isLoggedIn)
      setLoggedInUser(data.email)
    });
  }
  const register = async (email, password) => {
    return await fetch(
      "http://localhost:3000/users/register",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    )
    .then((res) => res.json())
    .then((data) => console.log(data.message));
  }

  return(
    <>
    {clickedLogin ?<Login handleQuitLogin={handleQuitLogin} handleClickRegister={handleClickRegister} login={login}></Login> : ""}
    {clickedRegister ?<Register handleQuitRegister={handleQuitRegister} handleClickLogin={handleClickLogin} register={register}></Register> : ""}
    <div style={{opacity: (clickedLogin || clickedRegister) ? "0.3" : ""}}>
    <Navbar handleClickLogin={handleClickLogin} isLoggedIn={isLoggedIn} loggedInUser={loggedInUser}></Navbar>
    <div style={{backgroundImage: "url(https://images.deliveryhero.io/image/fd-tr/LH/g3w6-hero.jpg)", height: "272px", display: "block", width: "100%", backgroundSize: "cover"}}></div>
    <div style={{height: "69px", display: "block", width: "100%", backgroundSize: "cover", borderBottom: "solid 1px #dcdcdc", }}>
    {Array.isArray(orders) ? orders.map(product => {
                return JSON.stringify(product)
        }) : ""}
    </div>
    <div style={{display: "flex" , height: "100%"}}>
    <LeftNavigation setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}></LeftNavigation>
    <ProductList products={products} addItemToCart={addItemToCart} selectedCategory={selectedCategory}></ProductList>
    
    </div>
    <ShoppingCart shoppingCart={shoppingCart} addOrder={addOrder}></ShoppingCart>
    </div>
    </>
  )
}

export default Home
