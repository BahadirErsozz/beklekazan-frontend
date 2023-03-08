const ShoppingItem = ({ shoppingItem }) => {
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
          borderBottomWidth: "1px"
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <img
              src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            ></img>
          </div>
          <div style={{ width: "30%", alignSelf: "center" }}>
            <div>
            {shoppingItem.name}
            </div>
            <div>
            {shoppingItem.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingItem;
