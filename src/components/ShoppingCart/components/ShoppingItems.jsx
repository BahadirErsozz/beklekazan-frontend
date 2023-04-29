import ShoppingItem from "./ShoppingItem";
const ShoppingItems = ({shoppingCart}) => {
    return (
        <>
       <div style={{display: "block", width: "100%", height: "auto", borderColor: "black", right: "0px", zIndex: "200", overscrollBehavior: "contain", maxHeight: "500px", overflowX: "hidden"}}>
        {shoppingCart.map(product => {
            return <ShoppingItem shoppingItem={product} key={product.id}></ShoppingItem>
        })}
        </div>
        </>
    )
};

export default ShoppingItems;