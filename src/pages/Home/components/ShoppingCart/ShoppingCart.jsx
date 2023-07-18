import CartSummary from "./components/CartSummary";
import ShoppingItems from "./components/ShoppingItems";
import config from "../../datas/config.json"

const ShoppingCart = ({handleHoverShoppingCart, handleQuitShoppingCart, addItemToCart, shoppingCart, addOrder, removeItemFromCart}) => {

    return (
        <>
       <div onMouseEnter={handleHoverShoppingCart} onMouseLeave={handleQuitShoppingCart} style={{position: "fixed", display: "flex", flexDirection: "column" , width: "20%", height: "auto", borderStyle: "solid", borderWidth: "1px", borderColor: config.BORDER_COLOR, right: "0px", zIndex: "200", top: "64px", backgroundColor: "white", boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)", borderRight: "solid 0px black", paddingBottom: "10px"}}>
        <div style={{width: "auto", margin: "0px 10px"}}>
        <div style={{width: "100%", height: "auto", textAlign: "center"}}>
            {shoppingCart.length > 0 ? <div>Sepetiniz</div> : ""}
            <div style={{margin: "10px 0px"}}>Sepetinize ürün ekleyin</div>
        </div>
        <ShoppingItems addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} shoppingCart={shoppingCart}></ShoppingItems>
        <CartSummary totalPrice={shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0)}></CartSummary>
        <div style={{textAlign: "center", backgroundColor: "#ea004b", color: "white", height: "30px", justifyContent: "center", display: "flex", alignItems: "center"}}> 
            <div onClick={addOrder}>
                Siparişi Tamamla
            </div>
        </div>
        </div>
       </div>
        </>
    )
};

export default ShoppingCart;