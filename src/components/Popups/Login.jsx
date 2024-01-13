import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json";

import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { setisLoggedIn } from "../../redux/isLoggedIn";
import { setloggedInUser } from "../../redux/loggedInUser";
import { incrementupdateIsLoggedIn } from "../../redux/updateIsLoggedIn";
import { incrementupdateOrders } from "../../redux/updateOrders";
import { incrementupdateAddresses } from "../../redux/updateAddresses";
import { ToastContainer, toast } from "react-toastify";

import user from "../Navbar/Assets/user.png";
import close from "./Assets/close.png";
import google from "./Assets/google.png";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLogin = () => {
    login(email, password);
  };
  const updateEverything = () => {
    dispatch(incrementupdateOrders({}));
  };
  const handleQuitLogin = () => {
    dispatch(setclickedLogin({ clickedLogin: false }));
  };

  const handleClickRegister = () => {
    dispatch(setclickedLogin({ clickedLogin: false }));
    dispatch(setclickedRegister({ clickedRegister: true }));
    dispatch(setclickedAddress({ clickedAddress: false }));
  };
  const showToastSuccessMessage = (mesage, poisition) => {
    toast.success(mesage, {
      position: poisition,
    });
  };
  const showToastErrorMessage = (mesage, poisition) => {
    toast.error(mesage, {
      position: poisition,
    });
  };

  const login = async (email, password) => {
    return await fetch(config.BACKEND_URL + "users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(response.status);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(incrementupdateIsLoggedIn({}));
        dispatch(setisLoggedIn({ isLoggedIn: data.isLoggedIn }));
        dispatch(setloggedInUser({ loggedInUser: data.email }));
        dispatch(setclickedLogin({ clickedLogin: false }));
        updateEverything();
        showToastSuccessMessage(
          "Başarıyla giriş yapıldı",
          toast.POSITION.TOP_CENTER
        );
      })
      .catch((err) => {
        showToastErrorMessage(
          "Giriş yaparken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          toast.POSITION.TOP_CENTER
        );
      });
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0 0.1rem 0.5rem rgba(0,0,0,.15)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          borderRadius: "0.25em",
          top: "15%",
          right: "30%",
          zIndex: "9999",
          height: "75%",
          width: "40%",
          backgroundColor: "white",
        }}
      >
        <div
          onClick={handleQuitLogin}
          style={{
            marginRight: "10px",
            marginTop: "10px",
            marginLeft: "auto",
            borderStyle: "",
            borderRadius: "50%",
            height: "35px",
            aspectRatio: "1 / 1",
            backgroundSize: "100%",
            backgroundImage: `url(${close})`,
          }}
        ></div>
        <div
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "600" }}
        >
          {" "}
          Giriş Yap
        </div>
        <div style={{ padding: "2em", paddingBottom: "0px" }}>
          E-Mail
          <input
            onChange={handleEmailChange}
            value={email}
            style={{
              marginBottom: "32px",
              width: "calc(100% - 70px)",
              padding: "14px 20px 14px 50px",
              left: "15%",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
              border: "1px solid #d2d8d8",
              borderRadius: "10px",
              marginTop: "3px",
              fontSize: "large",
            }}
          ></input>
          Parola
          <input
            onChange={handlePasswordChange}
            type="password"
            value={password}
            style={{
              width: "calc(100% - 70px)",
              padding: "14px 20px 14px 50px",
              left: "15%",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
              border: "1px solid #d2d8d8",
              borderRadius: "10px",
              marginTop: "3px",
              fontSize: "large",
            }}
          ></input>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "right",
            padding: "10px 20px 10px 50px",
          }}
        >
          {" "}
          Şifremi Unuttum
        </div>
        <div
          onClick={handleLogin}
          style={{
            width: "70%",
            height: "30px",
            borderStyle: "solid",
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "center",
            padding: "10px 0px",
            backgroundColor: "#034C8E",
            color: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ height: "fit-content" }}>Giriş Yap</div>
        </div>
        {/* <div style={{ textAlign: "center", margin: "10px 0" }}>Ya da</div> */}

        {/* <div
          onClick={handleLogin}
          style={{
            width: "70%",
            height: "30px",
            borderStyle: "solid",
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "center",
            padding: "10px 0px",
            backgroundColor: "#de5602",
            color: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: "24px",
              minWidth: "24px",
              maxHeight: "24px",
              maxWidth: "24px",
              backgroundSize: "100%",
              aspectRatio: "1/1",
              backgroundImage: `url(${google})`,
              backgroundColor: "white",
            }}
          ></div>
          <div style={{ height: "fit-content" }}>Google ile Giriş Yap</div>
        </div> */}

        <div
          onClick={handleClickRegister}
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          {" "}
          Hesabın yok mu? Kayıt Ol
        </div>
      </div>
    </>
  );
};

export default Login;
