import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import config from "../../config.json";

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

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    const itemExists = itemExistsOnCart();
    dispatch(
      addToShoppingCart({
        id: product.id,
        product: product,
        itemExists: itemExists,
      })
    );
  };

  const itemExistsOnCart = () => {
    return (
      shoppingCart.find((cartItem) => cartItem.id === product.id) !== undefined
    );
  };
  useEffect(() => {
    fetch(config.BACKEND_URL + "products/product/" + productId, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const productNew = {
          name: data[0].name,
          id: uuidv4(),
          price: data[0].price,
          category: data[0].category,
          deadline: data[0].deadline,
          leftAmount: data[0].leftAmount,
          totalAmount: data[0].totalAmount,
        };
        setProduct(productNew);
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
              minWidth: "512px",
              maxWidth: "512px",
              width: "512px",
              height: "512px",
            }}
          >
            <img
              src={
                config.BACKEND_URL + "products/product/" + productId + "/image"
              }
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            ></img>
          </div>
          <div
            style={{
              border: "1px solid rgba(0,0,0,.12)",
              height: "fit-content",
              marginLeft: "35px",

              width: "100%",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,.12)",
                padding: "12px",
              }}
            >
              <div
                style={{
                  font: "600 1.125rem/1.33 Inter,sans-serif",
                  marginBottom: "12px",
                }}
              >
                {product?.name}
              </div>
              <div
                style={{
                  font: "1rem/1.5 Inter,sans-serif",
                  marginBottom: "10px",
                }}
              >
                {product?.price} TL
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,.12)",
                padding: "12px",
              }}
            >
              <div
                style={{
                  font: "600 1.125rem/1.33 Inter,sans-serif",
                  marginBottom: "12px",
                }}
              >
                <Timer deadline={product?.deadline}></Timer>
              </div>
              <div
                style={{
                  font: "600 1.125rem/1.33 Inter,sans-serif",
                  marginBottom: "10px",
                }}
              >
                Kalan Ürün Sayısı: {product?.leftAmount} /{" "}
                {product?.totalAmount}
              </div>
            </div>
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
      </div>
    </>
  );
}

export default Product;
