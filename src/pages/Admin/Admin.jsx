import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid';

import UserList from "./components/Users/UserList";
import ProductList from "./components/Products/ProductList";
import OrderList from "./components/Orders/OrderList";

function Admin() {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/users',{
      'credentials': 'include',
    })
    .then((res) => res.json())
    .then((data) => {
      setUsers([])
      data = data.users
      for (let i = 0; i < data.length; i++) {
        setUsers(oldArray => {
          return [...oldArray, {email: data[i].email, id: uuidv4(), created_at: data[i].created_at}]
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/products',{
      'credentials': 'include',
    })
    .then((res) => res.json())
    .then((data) => {
      setProducts([])
      for (let i = 0; i < data.length; i++) {
        setProducts(oldArray => {
          return [...oldArray, {name: data[i].name, id: uuidv4(), price: data[i].price, deadline: data[i].deadline}]
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/orders/admin',{
      'credentials': 'include',
    })
    .then((res) => res.json())
    .then((data) => {
      setOrders([])
      data = data.orders
      for (let i = 0; i < data.length; i++) {
        setOrders(oldArray => {
          return [...oldArray, {email: data[i].email, id: uuidv4(), order_status: data[i].order_status, address_details: data[i].address_details}]
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return(
    <>
    <UserList users={users}/>
    <ProductList products={products}/>
    <OrderList orders={orders}/>
    </>
  )
}

export default Admin
