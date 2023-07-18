import { useEffect, useState } from "react";
import Timer from "./Timer";


const Product = ({product, addItemToCart}) => {
    const addItemToCartHandler = () => {
        addItemToCart(product.id)
    }
    const [time, setTime] = useState(30);
    const updateTime = (timeNow) => {
        setTime(timeNow - 1)
    }
    useEffect(() => {
        const interval = setInterval(() => updateTime(time), 1000);
    
        return () => clearInterval(interval);
      }, []);
    return (
        <>
       <div style={{width: "calc(calc(100%/4)", maxWidth: "29vh", minWidth: "29vh", margin: "10px 5px", height: "auto", border: "solid 1px rgba(0,0,0,.12)", alignSelf: "flex-start", textAlign: "center", zIndex: "5", flex: "1", aspectRatio: "1 / 1"}}>
            <div style={{minHeight: "20px", minWidth: "100%", display: "flex", position: "relative"}}>
                <div style={{minHeight: "20px", width: parseInt(product.sold_amount) + "%", backgroundColor: "#b7cbeb", borderRadius: "1.5em"}}>
                    
                </div>
                <div style={{position: "absolute", color: "black", textAlign: "center", minWidth: "inherit"}}>{product.sold_amount + " Tane Satıldı"}</div>
            </div>
            <Timer deadline={product.deadline}></Timer>
            <div style={{width: "100%", height: "146px", backgroundColor: "rgba(51,51,51,.04)"}}>
                <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" style={{width: "100%", height: "100%", background: "transparent" }}></img>
            </div>
            <div onClick={addItemToCartHandler} style={{cursor: "pointer", gridTemplateColumns: "calc(100% - 40px)", display: "grid", height: "40px", maxWidth: "100%", justifyContent: "center"}}>
                <div style={{display: "flex"}}>
                    <div style={{minWidth: "50px"}}>
                        <div> {product.name} </div>
                        <div style={{textAlign: "start", color: "#f27a1a"}}> {product.price} TL</div>
                    </div>
                    <div style={{display: "flex", height: "2rem", width: "100%"}}>
                        <div style={{alignSelf: "flex-end", backgroundColor: "#ff7f00", borderRadius: "5px", width: "2rem"}}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product;