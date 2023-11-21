import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import Timer from "../Home/components/Products/Timer";
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from "../../redux/shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/products";

function Orders() {
  const [addresses, setAddresses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/addresses", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message != null) return
        console.log(data.addresses)
        setAddresses(data.addresses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>
      <Navbar />
      <div
        style={{
          width: "80%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "auto",
          }}
        >
        
            <div
              onClick={addItemToCartHandler}
              style={{
                minWidth: "175px",
                maxWidth: "175px",
                height: "48px",
                padding: "8px",
                border: "1px solid #dcdcdc",
                borderRadius: "8px",
                backgroundColor: "#034C8E",
                color: "white",
                textAlign: "center",
                margin: "12px auto 12px 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  padding: "auto",
                  verticalAlign: "middle",
                  height: "auto",
                }}
              >
                Sepete Ekle
              </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Orders;
