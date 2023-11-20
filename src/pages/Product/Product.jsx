import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import Timer from "../Home/components/Products/Timer";
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from "../../redux/shoppingCart";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState({
    name: "Yerli Muz 500 G",
    price: 100.75,
    category: "Meyve",
    deadline: "20 Jul 2024 16:00:00 GMT",
    sold_amount: "70/100",
  });
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
  useLayoutEffect(() => {
    setProduct({
      name: "Yerli Muz 500 G",
      price: 100.75,
      category: "Meyve",
      deadline: "20 Jul 2024 16:00:00 GMT",
      sold_amount: "70/100",
    });
  }, []);
  useEffect(() => {
    // fetch("http://localhost:3000/products", {
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     for (let i = 0; i < data.length; i++) {
    //       setProduct((oldArray) => {
    //         return [
    //           ...oldArray,
    //           {
    //             name: data[i].name,
    //             id: uuidv4(),
    //             price: data[i].price,
    //             category: "Meyve",
    //             deadline: data[i].deadline,
    //           },
    //         ];
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setProduct({
      name: "Yerli Muz 500 G",
      price: 100.75,
      category: "Meyve",
      deadline: "20 Jul 2024 16:00:00 GMT",
      sold_amount: "70/100",
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
              src="https://images.migrosone.com/sanalmarket/product/28290036/28290036-6a65f9-1650x1650.jpg"
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
                {product?.sold_amount} Kişi Bu Ürünü Satın Aldı!
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
