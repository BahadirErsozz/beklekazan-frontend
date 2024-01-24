import { useDispatch, useSelector } from "react-redux";
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from "../../../../../redux/shoppingCart";
import config from "../../../../../config.json";

const ShoppingItem = ({ shoppingItem }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  const removeItemFromCartHandler = () => {
    dispatch(
      removeFromShoppingCart({
        id: shoppingItem.id,
      })
    );
  };
  const addItemToCartHandler = () => {
    const itemExists = itemExistsOnCart();
    dispatch(
      addToShoppingCart({
        id: shoppingItem.id,
        product: shoppingItem,
        itemExists: itemExists,
      })
    );
  };

  const itemExistsOnCart = () => {
    return (
      shoppingCart.find((cartItem) => cartItem.id === shoppingItem.id) !==
      undefined
    );
  };
  return (
    <>
      <div
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          right: "0px",
          zIndex: "200",
          borderBottom: "solid",
          borderColor: "#dcdcdc",
          borderBottomWidth: "1px",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "auto", display: "flex" }}>
            <img
              src={
                config.BACKEND_URL +
                "products/product/" +
                shoppingItem.id +
                "/image"
              }
              style={{
                width: "60px",
                height: "60px",
                background: "transparent",
              }}
            ></img>
            <div>
              <div style={{ textAlign: "center", marginLeft: "15px" }}>
                {shoppingItem.name}
              </div>
            </div>
          </div>
          <div
            style={{
              width: "30%",
              alignSelf: "center",
              textAlign: "center",
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{shoppingItem.price * shoppingItem.count} TL </div>
            <div
              style={{
                display: "flex",
                height: "30px",
                width: "70%",
                alignItems: "center",
                textAlign: "center",
                alignSelf: "center",
                borderRadius: "4px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: config.BORDER_COLOR,
                marginTop: "5px",
              }}
            >
              <div
                onClick={removeItemFromCartHandler}
                style={{
                  width: "33%",
                  height: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                  borderRight: "1px solid",
                  borderColor: config.BORDER_COLOR,
                }}
              >
                {" "}
                -{" "}
              </div>
              <div
                style={{
                  width: "33%",
                  height: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRight: "1px solid",
                  borderColor: config.BORDER_COLOR,
                }}
              >
                {" "}
                {shoppingItem.count}{" "}
              </div>
              <div
                onClick={addItemToCartHandler}
                style={{ width: "33%", cursor: "pointer" }}
              >
                {" "}
                +{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingItem;
