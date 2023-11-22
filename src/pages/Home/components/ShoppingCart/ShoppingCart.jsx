import CartSummary from "./components/CartSummary";
import ShoppingItems from "./components/ShoppingItems";
import config from "../../../../config.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = ({}) => {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  return (
    <>
      <div
        style={{
          position: "fixed",
          minWidth: "200px",
          maxWidth: "200px",
          height: "70px",
          top: "0",
          right: "0px",
          zIndex: "200",
          paddingBottom: "10px",
          opacity: "0",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          minWidth: "365px",
          maxWidth: "365px",
          height: "auto",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "8px",
          borderColor: config.BORDER_COLOR,
          top: "70px",
          right: "0px",
          zIndex: "200",
          backgroundColor: "white",
          boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
          borderRight: "solid 0px black",
          paddingBottom: "10px",
        }}
      >
        <div style={{ width: "auto", margin: "0px 10px" }}>
          <div style={{ width: "100%", height: "auto", textAlign: "center" }}>
            {shoppingCart?.length > 0 ? <div>Sepetiniz</div> : ""}
            <div style={{ margin: "10px 0px" }}>Sepetinize ürün ekleyin</div>
          </div>
          <ShoppingItems></ShoppingItems>
          <CartSummary
            totalPrice={shoppingCart?.reduce(
              (partialSum, a) => partialSum + a.price,
              0
            )}
          ></CartSummary>
          <Link
          to="/sepetim"
            style={{
              textAlign: "center",
              backgroundColor: "#ea004b",
              color: "white",
              height: "30px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            <div>Siparişi Tamamla</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
