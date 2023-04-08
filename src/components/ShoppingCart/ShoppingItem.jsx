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
          <div style={{ width: "30%", alignSelf: "center", textAlign: "center", alignContent: "center", display: "flex", flexDirection: "column"}}>
            <div>
            {shoppingItem.name}
            </div>
            <div>
            {shoppingItem.price}
            </div>
            <div style={{display: "flex", height: "30px", width: "70%", border: "solid", alignItems: "center", textAlign: "center", alignSelf: "center"}}>
              <div style={{width: "33%", borderRight: "solid", height: "100%", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex"}}> - </div>
              <div style={{width: "33%", borderRight: "solid", height: "100%", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex"}}> 1 </div>
              <div style={{ width: "33%"}}> + </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingItem;
