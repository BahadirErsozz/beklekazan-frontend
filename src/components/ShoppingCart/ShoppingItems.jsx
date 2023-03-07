import ShoppingItem from "./ShoppingItem";
const ShoppingItems = ({shoppingCart}) => {
    return (
        <>
       <div style={{display: "block", width: "100%", height: "auto", borderStyle: "solid", borderWidth: "5px", borderColor: "black", right: "0px", zIndex: "200"}}>
        {shoppingCart.map(shoppingItem => {
            return <ShoppingItem shoppingItem={shoppingItem} key={shoppingItem.id}></ShoppingItem>
        })}
        </div>
        </>
    )
};

export default ShoppingItems;