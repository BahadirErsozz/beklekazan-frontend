const CartSummary = ({totalPrice}) => {
    return (
       <>
       <div style={{display: "block", width: "100%", height: "auto", borderStyle: "", borderWidth: "5px", borderColor: "black", right: "0px", zIndex: "200"}}>
        <div style={{width: "100%", height: "30px", display: "flex", padding: "0"}}>
        <div style={{}}> Toplam:</div>
        <div style={{flex: "1", textAlign: "right", paddingRight: "5px"}}>{totalPrice + " TL"}</div>
        </div>
       </div>
       </>
    )
};

export default CartSummary;