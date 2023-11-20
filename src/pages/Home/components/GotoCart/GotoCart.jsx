import { Link } from "react-router-dom";

const GotoCart = ({
  addItemToCart,
  shoppingCart,
  addOrder,
  removeItemFromCart,
}) => {
  return (
    <>
      <Link
        to="/sepetim"
        style={{
          position: "fixed",
          border: "2px solid #dcdcdc",
          fontSize: "30px",
          borderRadius: "12px",
          right: "100px",
          zIndex: "200",
          bottom: "50px",
          backgroundColor: "white",
          boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
          color: "white",
          backgroundColor: "#034C8E",
          padding: "8px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Sepete Git &gt;
      </Link>
    </>
  );
};

export default GotoCart;
