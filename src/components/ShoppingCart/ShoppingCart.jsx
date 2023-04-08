import CartSummary from "./CartSummary";
import ShoppingItems from "./ShoppingItems";

const ShoppingCart = ({shoppingCart}) => {

    return (
        <>
       <div style={{position: "fixed", display: "flex", flexDirection: "column" , width: "20%", height: "100%", borderStyle: "", borderWidth: "1px", borderColor: "black", right: "0px", zIndex: "200", top: "64px", backgroundColor: "white", boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)"}}>
        <div style={{width: "auto", margin: "0px 10px"}}>
        <div style={{width: "100%", height: "auto", textAlign: "center"}}>
            <div>Sepetiniz</div>
            <div style={{margin: "10px 0px"}}>Sepetinize ürün ekleyin</div>
        </div>
        <ShoppingItems shoppingCart={shoppingCart}></ShoppingItems>
        <CartSummary totalPrice={shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0)}></CartSummary>
        <div style={{textAlign: "center", backgroundColor: "#ea004b", color: "white", height: "30px", justifyContent: "center", display: "flex", alignItems: "center"}}> 
            <div>
                Siparişi Tamamla
            </div>
        </div>
        </div>
       </div>
        </>
    )
};

export default ShoppingCart;