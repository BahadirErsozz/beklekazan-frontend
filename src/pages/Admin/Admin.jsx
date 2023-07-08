import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
import UserList from "./components/Users/UserList";
function Admin() {
  const [users, setUsers] = useState([])
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
  return(
    <>
    <UserList users={users}/>
    </>
  )
}

export default Admin
