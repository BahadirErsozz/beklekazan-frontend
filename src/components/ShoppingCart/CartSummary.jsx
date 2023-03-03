const CartSummary = ({products}) => {
    return (
       <>
       <div style={{display: "block", width: "100%", height: "auto", borderStyle: "", borderWidth: "5px", borderColor: "black", right: "0px", zIndex: "200"}}>
        <div style={{width: "100%", height: "30px", display: "flex", padding: "0 16px"}}>
        <div> Toplam:</div>
        <div style={{flex: "1", textAlign: "right"}}> 100 TL</div>
        </div>
       </div>
       </>
    )
};

export default CartSummary;