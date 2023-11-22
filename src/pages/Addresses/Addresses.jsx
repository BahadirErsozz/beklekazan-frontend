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
import { setAddresses } from "../../redux/addresses";

import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/products";
import edit from "./Assets/edit-3-svgrepo-com.png"
import trash from "./Assets/trash-svgrepo-com.png"

function Addresses() {
  const [addressaes, setAddresses] = useState([]);
  const addresses = useSelector((state) => state.addresses.addresses);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/addresses", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message != null) return
        console.log(data.addresses)
        dispatch(setAddresses({ address: data.addresses }));
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
          {" "}
          <div
            style={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              height: "512px",
            }}
          >
            <div
                style={{
                  font: "600 1.5rem/1.5 Inter,sans-serif",
                  marginBottom: "12px",
                  padding: "12px",
                  textAlign: "center"
                }}
              >
                Adreslerim
              </div>
              <div
                style={{
                  font: "600 1.25rem Inter,sans-serif",
                  marginBottom: "12px",
                  padding: "12px",
                  textAlign: "center"
                }}
              >
                Teslimat Adreslerim
              </div>
              <div
              style={{
                minWidth: "70%",
                maxWidth: "70%",
                height: "48px",
                padding: "8px",
                border: "1px solid #dcdcdc",
                borderRadius: "8px",
                backgroundColor: "#034C8E",
                color: "white",
                textAlign: "center",
                margin: "12px auto",
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
                <div> Yeni Teslimat Adresi Ekle</div> 
              </div>
            </div>
            
              {addresses.map((address) => {
                const address_details = JSON.parse(address.address_details);
                   return(
                    <div
                    style={{
                      minWidth: "70%",
                      maxWidth: "70%",
                      height: "auto",
                      padding: "8px",
                      border: "1px solid #dcdcdc",
                      borderRadius: "8px",
                      textAlign: "center",
                      margin: "12px auto",
                    }}
                  >
                   <div
                   style={{
                     width: "100%",
                     height: "fit-content",
                     display: "flex",
                     justifyContent: "space-between"
                    
                   }}
                 >
                   
                   <div style={{font: "600 20px Inter,sans-serif",}}> {address_details.address_name}</div> 
                   <div><img src={edit} style={{maxWidth: "24px", maxHeight: "24px", marginRight: "10px"}}/><img src={trash} style={{maxWidth: "24px", maxHeight: "24px"}}/></div>
                   
                 </div>
                 <div
                   style={{
                     width: "100%",
                     height: "100%",
                     display: "flex",
                     justifyContent: "space-between"
                    
                   }}
                 >
                   
                   <div style={{font: "400 15px Inter,sans-serif",maxWidth: "100%", whiteSpace: "initial", wordWrap: "break-word", marginTop: "10px"}}> {Object.values(address_details).toString()}</div> 
                 </div>
                 </div>
                 )
                })}
             
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Addresses;
