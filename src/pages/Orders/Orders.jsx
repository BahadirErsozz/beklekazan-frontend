import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";

function Orders() {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const selectedAddress = useSelector((state) => state.selectedAddress.selectedAddress);
  const addresses = useSelector((state) => state.addresses.addresses);

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

  const addOrder = async () => {
    if (!isLoggedIn) {
      showToastInfoMessage(
        "Sipariş vermeden önce giriş yapmalısınız",
        toast.POSITION.TOP_CENTER
      );
      handleClickLogin();
    } else {
      return await fetch("http://localhost:3000/orders", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shopping_cart: shoppingCart,
          order_date: Date.now(),
          order_status: 0,
          order_address: "empty address",
          address_id: selectedAddress,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then((data) => {
          console.log(shoppingCart);
        })
        .catch((err) => {
          console.log(err)
          showToastErrorMessage(
            "Sipariş oluşturulurken bir hata oluştu",
            toast.POSITION.TOP_CENTER
          );
        });
    }
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>
      <Navbar />
      {addresses?.length > 0 ? (
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
                border: "1px solid rgba(0,0,0,.12)",
                width: "100%",
                minWidth: "650px",
                height: "fit-content",
              }}
            >
              {addresses.map((address) => {
                return (
                  <ShoppingItem
                    shoppingItem={product}
                    key={product.id}
                  ></ShoppingItem>
                );
              })}
            </div>
            <div
              style={{
                border: "1px solid rgba(0,0,0,.12)",
                height: "fit-content",
                marginLeft: "35px",
                minWidth: "330px",
                maxWidth: "330px",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid rgba(0,0,0,.12)",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ font: "600 1rem Inter,sans-serif" }}>
                    Sepet Özeti
                  </div>
                  <div style={{ font: ".875rem/1.43 Inter,sans-serif" }}>
                    2 ürün
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ font: ".875rem/1.43 Inter,sans-serif" }}>
                    Toplam Tutar
                  </div>
                  <div style={{ font: ".875rem/1.43 Inter,sans-serif" }}>
                    98,50 TL
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ font: ".875rem/1.43 Inter,sans-serif" }}>
                    Toplam İndirim
                  </div>
                  <div style={{ font: ".875rem/1.43 Inter,sans-serif" }}>
                    -18,50 TL
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ font: "600 1rem Inter,sans-serif" }}>
                    Ödenecek Tutar
                  </div>
                  <div style={{ font: "600 1rem Inter,sans-serif" }}>
                    80,00 TL
                  </div>
                </div>
              </div>
              <div
              onClick={addOrder}
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
                  margin: "12px auto 12px 12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "auto",
                    verticalAlign: "middle",
                    height: "auto",
                  }}
                >
                  Siparişi Tamamla
                </div>
              </div>
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