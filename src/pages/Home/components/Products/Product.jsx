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
       <div style={{width: "calc(calc(100%/4)", maxWidth: "28vh", minWidth: "28vh", margin: "10px 5px", height: "auto", borderStyle: "solid", borderWidth: "5px", borderColor: "#dcdcdc", alignSelf: "flex-start", textAlign: "center", zIndex: "5", flex: "1", aspectRatio: "1 / 1"}}>
            <Timer deadline={product.deadline}></Timer>
            <div style={{width: "100%", height: "146px", backgroundColor: "rgba(51,51,51,.04)"}}>
                <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" style={{width: "100%", height: "100%", background: "transparent" }}></img>
            </div>
            <div onClick={addItemToCartHandler} style={{gridTemplateColumns: "calc(100% - 40px)", display: "grid", height: "40px", maxWidth: "100%", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div> {product.price} TL</div>
                    <div> {product.name} </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product;