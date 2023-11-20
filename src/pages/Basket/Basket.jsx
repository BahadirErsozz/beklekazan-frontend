import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import { useDispatch, useSelector } from "react-redux";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import { Link } from "react-router-dom";

function Basket() {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>
      <Navbar />
      {shoppingCart?.length > 0 ? (
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
              {shoppingCart.map((product) => {
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

export default Basket;
