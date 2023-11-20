import { useDispatch, useSelector } from "react-redux";
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from "../../../redux/shoppingCart";

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
          height: "110px",
          maxHeight: "110px",
          minHeight: "110px",
          right: "0px",
          zIndex: "200",
          borderBottom: "solid",
          borderColor: "#dcdcdc",
          borderBottomWidth: "1px",
          padding: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{}}>
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
              width: "30%",
              alignSelf: "center",
              textAlign: "center",
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{shoppingItem.name}</div>
            <div>{shoppingItem.price}</div>
            <div
              style={{
                display: "flex",
                height: "30px",
                width: "70%",
                border: "solid",
                alignItems: "center",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <div
                onClick={removeItemFromCartHandler}
                style={{
                  width: "33%",
                  borderRight: "solid",
                  height: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {" "}
                -{" "}
              </div>
              <div
                style={{
                  width: "33%",
                  borderRight: "solid",
                  height: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {" "}
                {shoppingItem.count}{" "}
              </div>
              <div onClick={addItemToCartHandler} style={{ width: "33%" }}>
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
