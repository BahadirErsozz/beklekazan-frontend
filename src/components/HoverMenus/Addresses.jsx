
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json"
import "./account.css"
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { setselectedAddress } from "../../redux/selectedAddress";
import { setAddresses } from "../../redux/addresses";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import React from "react";

const Addresses = ({setUpdate}) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [update, setUpdatee] = useState(1)
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const addresses = useSelector((state) => state.addresses.addresses);
  const selectedAddress = useSelector(
    (state) => state.selectedAddress.selectedAddress
  );

  const dispatch = useDispatch();

  const handleClickAddress = () => {
    dispatch(setclickedLogin({ clickedLogin: false }));
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: true }));
  };

  const updateSelectedAddress = (address_id) => {
    const newAddresses = addresses.map((address) => {
        if (address.address_id == address_id) {
            return {...address, selected: 1}
        }
        return {...address, selected: 0}
    }) 
    dispatch(setAddresses({ address: newAddresses }));
    const selected_address = addresses.find((element) => {
        return element.address_id == address_id;
      });
      dispatch(setselectedAddress({ selectedAddress: selected_address }));
  };

  const selectAddress = async (address_id) => {
    await fetch("http://localhost:3000/addresses/select", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address_id: address_id }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        updateSelectedAddress(address_id);
      })
      .catch((err) => {
        updateSelectedAddress(address_id);
      });
  };

  return (
    <>
    <div
        style={{
          position: "relative",
          minWidth: "220px",
          maxWidth: "220px",
          height: "6px",
          top: "0",
          right: "0px",
          zIndex: "200",
          opacity: "0",
        }}
      ></div>
    <div style={{top: "0px", position: "relative"}}>
    <ul
        style={{
        padding: "10px 0",
        marginTop: "0px",
        minWidth: "40vh",
        backgroundColor: "white",
        listStyleType: "none",
        border: "1px solid rgb(220, 220, 220)",
        borderRadius: "8px",
        boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
        }}
    >   
        {update > 0 && addresses.map((address) => {
        const address_details = JSON.parse(address.address_details);
        return (
            <li
            key={uuidv4()}
            onClick={() => selectAddress(address.address_id)}
            style={{
                backgroundColor: "white",
                height: "70px",
                display: "flex",
                padding: "5px 10px",
                borderBottom: "1px solid rgb(220, 220, 220)",
                border: address.selected ? "3px solid #034C8E" : ""
            }}
            >
            <div style={{ minWidth: "0", marginLeft: "7px" }}>
                <div>{address_details.address_name}</div>
                <div>
                {address_details.neighborhood} / {address_details.state}{" "}
                / {address_details.city}
                </div>
            </div>

            <div
                style={{
                display: "flex",
                alignItems: "center",
                minWidth: "0",
                marginLeft: "auto",
                }}
            >
                düzenle
            </div>
            </li>
        );
        })}
        <div
        onClick={handleClickAddress}
        style={{
            minWidth: "155px",
            maxWidth: "155px",
            height: "20px",
            padding: "8px",
            border: "1px solid #dcdcdc",
            borderRadius: "8px",
            backgroundColor: "#034C8E",
            color: "white",
            textAlign: "center",
            margin: "10px auto 0 auto",
            cursor: "pointer",
        }}
        >
        <div>Yeni Adres Ekle</div>
        </div>
    </ul>
    </div>
    </>
  );
};

export default Addresses;
