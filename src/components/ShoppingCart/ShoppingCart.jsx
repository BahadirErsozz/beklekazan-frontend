import CartSummary from "./CartSummary";
import ShoppingItems from "./ShoppingItems";

const ShoppingCart = ({products}) => {
    return (
        <>
       <div style={{position: "fixed", display: "flex", flexDirection: "column" , width: "20%", height: "100%", borderStyle: "solid", borderWidth: "1px", borderColor: "black", right: "0px", zIndex: "200"}}>
        <div style={{width: "100%", height: "auto", textAlign: "center"}}>
            <div>Sepetiniz</div>
            <div style={{margin: "10px 0px"}}>Sepetinize ürün ekleyin</div>
        </div>
        <ShoppingItems></ShoppingItems>
        <CartSummary></CartSummary>
       </div>
        </>
    )
};

export default ShoppingCart;