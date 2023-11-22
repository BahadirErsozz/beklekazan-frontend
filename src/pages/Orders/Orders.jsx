import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { useState, useEffect, useRef } from "react";
import config from "../../config.json";
import { v4 as uuidv4 } from "uuid";

function Orders() {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const selectedAddress = useSelector((state) => state.selectedAddress.selectedAddress);
  const addresses = useSelector((state) => state.addresses.addresses);
  const updateOrders = useSelector((state) => state.updateOrders.updateOrders);

  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/orders", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((dataa) => {
        setOrders(dataa.orders);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [updateOrders]);


  const showToastInfoMessage = (mesage, poisition) => {
    toast.info(mesage, {
      position: poisition,
    });
  };

  const showToastErrorMessage = (mesage, poisition) => {
    toast.error(mesage, {
      position: poisition,
    });
  };

  const handleClickLogin = () => {
    dispatch(setclickedLogin({ clickedLogin: true }));
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: false }));
  };


  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>
      <Navbar />
      {orders?.length > 0 ? (
        <div
          style={{
            width: "80%",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "auto",
            }}
          >
            {" "}
            <div
              style={{
                width: "100%",
                minWidth: "650px",
                height: "fit-content",
              }}
            >
              {orders.map((order) => {
                const order_status = order.order_status + "";
                const date = new Date(order.order_date)
                const order_details = JSON.parse(order.order_details);
                return(
                  
                 <div
                 key={uuidv4()}
                 style={{
                   minWidth: "90%",
                   maxWidth: "90%",
                   height: "auto",
                   padding: "8px",
                   border: "1px solid #dcdcdc",
                   borderRadius: "8px",
                   textAlign: "center",
                   margin: "12px auto",
                 }}
               >
                <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "space-between"
                 
                }}
              >
                
                <div style={{font: "600 15px Inter,sans-serif",}}> {"Sipariş No: " + order.order_id }</div> 
                <div>{config.ORDER_STATUS[order_status]}</div>
                
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between"
                 
                }}
              >
                <div style={{font: "400 15px Inter,sans-serif",maxWidth: "100%", whiteSpace: "initial", wordWrap: "break-word", marginTop: "10px"}}> {date.toISOString().slice(0, 10) }</div> 
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between"
                 
                }}
              >
                <div style={{font: "400 15px Inter,sans-serif",maxWidth: "100%", whiteSpace: "initial", wordWrap: "break-word", marginTop: "10px"}}> {"Sepetteki Ürünler (" + order_details.shopping_cart.length + ")" }</div> 
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              >
                {order_details.shopping_cart.map((cartItem) => {
                  return (<img src={"http://localhost:3000/products/product/" + cartItem.id + "/image"} style={{maxWidth: "24px", maxHeight: "24px", marginRight: "10px"}}/>   )
                })}
                
              </div>
              
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between"
                 
                }}
              >
                
                <div style={{font: "600 15px Inter,sans-serif",maxWidth: "100%", whiteSpace: "initial", wordWrap: "break-word", marginTop: "10px"}}> {"Toplam Tutar: " + order_details.order_total + " TL"}</div> 
                <Link to={"/siparis/" + order.order_id} style={{font: "400 15px Inter,sans-serif",maxWidth: "100%", backgroundColor: "#f1f2f5", borderRadius: "10px", padding: "5px", cursor: "pointer", color: "black", textDecoration: "none"}}> {"Sipariş Detayı >"}</Link> 
              </div>
              </div>
              )
             })}
            </div>
            
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "24%",
            height: "auto",
            margin: "35px auto 0 auto",
            padding: "50px 56px",
            textAlign: "center",
            border: "1px solid #dcdcdc",
            font: "600 1rem Inter,sans-serif",
          }}
        >
          Sepetinizde Hiç Ürün Bulunmuyor!
          <Link
            to="/"
            style={{
              minWidth: "175px",
              maxWidth: "175px",
              height: "48px",
              padding: "8px",
              border: "1px solid #dcdcdc",
              borderRadius: "8px",
              backgroundColor: "#034C8E",
              color: "white",
              textAlign: "center",
              margin: "16px auto 12px auto",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                padding: "auto",
                verticalAlign: "middle",
                height: "auto",
              }}
            >
              Alışverişe Başla
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Orders;
