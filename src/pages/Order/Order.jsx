import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json";

function Order() {
  let { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const [orderDate, setOrderDate] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/orders/" + orderId, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const orderData = data.orders[0];
        setOrder(orderData);
        setOrderDetails(JSON.parse(orderData.order_details));
        const date = new Date(orderData.order_date);
        setOrderDate(orderData.order_date);
        this.forceUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>
      <Navbar />

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
            width: "100%",
            height: "auto",
          }}
        >
          <div
            style={{
              minWidth: "90%",
              maxWidth: "90%",
              margin: "12px auto",
              padding: "8px 16px 8px 0px",
            }}
          >
            <Link
              to="/siparislerim"
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
                margin: "12px auto 12px 0",
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
                Geri Dön
              </div>
            </Link>
          </div>{" "}
          <div
            style={{
              width: "100%",
              minWidth: "650px",
              height: "fit-content",
            }}
          >
            <div
              style={{
                minWidth: "90%",
                maxWidth: "90%",
                height: "auto",
                padding: "18px",
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
                  justifyContent: "space-between",
                }}
              >
                <div style={{ font: "600 15px Inter,sans-serif" }}>
                  {" "}
                  {"Sipariş No: " + order?.order_id}
                </div>
                <div>{config.ORDER_STATUS[order?.order_status + ""]}</div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    font: "400 15px Inter,sans-serif",
                    maxWidth: "100%",
                    whiteSpace: "initial",
                    wordWrap: "break-word",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {orderDate != null
                    ? new Date(orderDate).toISOString().slice(0, 10)
                    : ""}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    font: "400 15px Inter,sans-serif",
                    maxWidth: "100%",
                    whiteSpace: "initial",
                    wordWrap: "break-word",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {"Sepetteki Ürünler (" +
                    orderDetails.shopping_cart?.length +
                    ")"}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "10px 0px",
                  display: "grid",
                  gridColumnGap: "2rem",
                  gridRowGap: "0.5rem",
                  gridTemplateColumns: "1fr 10fr",
                }}
              >
                <div
                  style={{
                    font: "600 15px Inter,sans-serif",
                    textAlign: "start",
                  }}
                >
                  {" "}
                  {"Miktar"}
                </div>{" "}
                <div
                  style={{
                    font: "600 15px Inter,sans-serif",
                    textAlign: "start",
                  }}
                >
                  {" "}
                  {"Ürün"}
                </div>
                {orderDetails.shopping_cart?.map((cartItem) => {
                  return (
                    <>
                      {" "}
                      <div style={{ paddingTop: "40%" }}>{cartItem.count}</div>
                      <div style={{display: "flex"}}>
                      <img
                        src={
                          "http://localhost:3000/products/product/" +
                          cartItem.id +
                          "/image"
                        }
                        style={{
                          maxWidth: "96px",
                          maxHeight: "96px",
                          marginRight: "10px",
                        }}
                      />
                      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "30px"}}><div style={{font: "600 16px Inter,sans-serif",}}>{cartItem.name}</div><div style={{font: "600 1rem Inter,sans-serif",}}>{cartItem.price + " TL"}</div></div>
                      
                      </div>
                    </>
                  );
                })}
              </div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    font: "600 15px Inter,sans-serif",
                    maxWidth: "100%",
                    whiteSpace: "initial",
                    wordWrap: "break-word",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {"Toplam Tutar: " + orderDetails.order_total + " TL"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
