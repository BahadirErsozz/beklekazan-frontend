import { useEffect, useState } from "react";
import Timer from "./Timer";

const Product = ({ product, addItemToCart }) => {
  const addItemToCartHandler = () => {
    addItemToCart(product.id);
  };
  const [time, setTime] = useState(30);
  const updateTime = (timeNow) => {
    setTime(timeNow - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => updateTime(time), 1000);

    return () => clearInterval(interval);
  }, []);
  //width: "calc(calc(100%/4)", maxWidth: "calc(calc(100%/4)", minWidth: "calc(calc(100%/4)", margin: "10px 5px", height: "auto", borderStyle: "solid", borderWidth: "5px", borderColor: "#dcdcdc", alignSelf: "flex-start", textAlign: "center", backgroundColor: "rgba(51,51,51,.04)", zIndex: "5", flex: "1", aspectRatio: "1 / 1"
  return (
    <>
      <div
        style={{
          maxWidth: "200px",
          minWidth: "200px",
          aspectRatio: "1/1",
          height: "auto",
          border: "1px solid #dcdcdc",
          margin: "8px",
          padding: "8px 8px",
          borderRadius: "8px",
        }}
      >
        <Timer deadline={product.deadline}></Timer>
        <div
          style={{
            width: "100%",
            height: "146px",
            backgroundColor: "rgba(51,51,51,.04)",
          }}
        >
          <img
            src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          ></img>
        </div>
        <div style={{ marginBottom: "30px" }}> {product.name} </div>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          {" "}
          {product.price} TL
        </div>

        <div
          onClick={addItemToCartHandler}
          style={{
            minWidth: "105px",
            maxWidth: "105px",
            height: "20px",
            padding: "8px",
            border: "1px solid #dcdcdc",
            borderRadius: "8px",
            backgroundColor: "#034C8E",
            color: "white",
            textAlign: "center",
            margin: "0 auto",
            cursor: "pointer",
          }}
        >
          {" "}
          Sepete Ekle
        </div>
      </div>
    </>
  );
};

export default Product;
