
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../pages/Home/datas/config.json"
import "./account.css"

const Account = ({ }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  return (
    <>
    <div
        style={{
          position: "relative",
          minWidth: "220px",
          maxWidth: "220px",
          height: "6px",
          top: "0",
          right: "0px",
          zIndex: "200",
          opacity: "0",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minWidth: "220px",
          maxWidth: "220px",
          height: "auto",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "8px",
          borderColor: config.BORDER_COLOR,
          top: "0px",
          right: "0px",
          zIndex: "200",
          backgroundColor: "white",
          boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
          borderRight: "solid 0px black",
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        <div className="Account-menu-item" style={{ width: "auto", padding: "0px 16px", height: "48px", display: "flex", alignItems: "center", flexDirection: "row", cursor: "pointer" }}>
            <div style={{marginRight: "12px", maxHeight: "32px", maxWidth: "32px",minWidth: "32px", minHeight: "32px",backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/512/649/649931.png')",
                backgroundSize: "100%",
                aspectRatio: "1/1",
                backgroundRepeat: "no-repeat",}}></div>
            <div style={{height: "fit-content", textAlign: "center" }}>Adreslerim</div>
        </div>
        <div className="Account-menu-item" style={{ width: "auto", padding: "0px 16px", height: "48px", display: "flex", alignItems: "center", flexDirection: "row", cursor: "pointer"  }}>
            <div style={{marginRight: "12px", maxHeight: "32px", maxWidth: "32px",minWidth: "32px", minHeight: "32px",backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/512/649/649931.png')",
                backgroundSize: "100%",
                aspectRatio: "1/1",
                backgroundRepeat: "no-repeat",}}></div>
            <div style={{height: "fit-content", textAlign: "center" }}>Siparişlerim</div>
        </div>
        <div className="Account-menu-item" style={{ width: "auto", padding: "0px 16px", height: "48px", display: "flex", alignItems: "center", flexDirection: "row", cursor: "pointer"  }}>
            <div style={{marginRight: "12px", maxHeight: "32px", maxWidth: "32px",minWidth: "32px", minHeight: "32px",backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/512/649/649931.png')",
                backgroundSize: "100%",
                aspectRatio: "1/1",
                backgroundRepeat: "no-repeat",}}></div>
            <div style={{height: "fit-content", textAlign: "center" }}>Çıkış Yap</div>
        </div>
      </div>
    </>
  );
};

export default Account;
