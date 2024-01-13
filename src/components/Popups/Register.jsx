import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config.json";

import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { incrementupdateIsLoggedIn } from "../../redux/updateIsLoggedIn";
import { incrementupdateOrders } from "../../redux/updateOrders";
import { incrementupdateAddresses } from "../../redux/updateAddresses";
import { ToastContainer, toast } from "react-toastify";

import close from "./Assets/close.png";

const Register = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const dispatch = useDispatch();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleRegister = () => {
    if (password == passwordRepeat) {
      register(email, password);
    } else {
      showToastErrorMessage(
        "Girdiğiniz şifreler eşleşmedi. Tekrar deneyin.",
        toast.POSITION.TOP_CENTER
      );
    }
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

  const handleQuitRegister = () => {
    dispatch(setclickedRegister({ clickedRegister: false }));
  };

  const handleClickLogin = () => {
    dispatch(setclickedLogin({ clickedLogin: true }));
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: false }));
  };

  const updateEverything = () => {
    dispatch(incrementupdateOrders({}));
  };

  const register = async (email, password) => {
    return await fetch(config.BACKEND_URL + "users/register", {
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
        dispatch(setclickedRegister({ clickedRegister: false }));
        updateEverything();
        showToastSuccessMessage(
          "Başarıyla kayıt olundu!",
          toast.POSITION.TOP_CENTER
        );
      })
      .catch((err) => {
        showToastErrorMessage(
          "Kayıt olurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
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
          onClick={handleQuitRegister}
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
          Kayıt Ol
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
          Parolayı Doğrula
          <input
            onChange={handlePasswordRepeatChange}
            type="password"
            value={passwordRepeat}
            style={{
              marginBottom: "38px",
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
          onClick={handleRegister}
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
          <div style={{ height: "fit-content" }}>Kayıt Ol</div>
        </div>

        <div
          onClick={handleClickLogin}
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          {" "}
          Hesabın var mı? Giriş Yap
        </div>
      </div>
    </>
  );
};

export default Register;
