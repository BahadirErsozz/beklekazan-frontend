const ShoppingItem = ({shoppingItem}) => {
    
    return (
        <>
       <div style={{display: "block", width: "100%", height: "auto", borderStyle: "solid", borderWidth: "5px", borderColor: "black", right: "0px", zIndex: "200"}}>
        {shoppingItem.name}
        </div>
        </>
    )
};

export default ShoppingItem;