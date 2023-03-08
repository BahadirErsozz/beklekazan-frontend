import CartSummary from "./CartSummary";
import ShoppingItems from "./ShoppingItems";

const ShoppingCart = ({shoppingCart}) => {

    return (
        <>
       <div style={{position: "fixed", display: "flex", flexDirection: "column" , width: "20%", height: "100%", borderStyle: "solid", borderWidth: "1px", borderColor: "black", right: "0px", zIndex: "200"}}>
        <div style={{width: "auto", margin: "0px 10px"}}>
        <div style={{width: "100%", height: "auto", textAlign: "center"}}>
            <div>Sepetiniz</div>
            <div style={{margin: "10px 0px"}}>Sepetinize ürün ekleyin</div>
        </div>
        <ShoppingItems shoppingCart={shoppingCart}></ShoppingItems>
        <CartSummary totalPrice={shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0)}></CartSummary>
        </div>
       </div>
        </>
    )
};

export default ShoppingCart;