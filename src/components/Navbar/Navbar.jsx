import config from "../../pages/Home/datas/config.json";
import ShoppingCart from "../../pages/Home/components/ShoppingCart/ShoppingCart";
import Login from "../Popups/Login";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { ToastContainer, toast } from "react-toastify";

const Navbar = ({}) => {
  const [clickedShoppingCart, setClickedShoppingCart] = useState(false);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
  const [addresses, setAddresses] = useState([
    {
      address_details: JSON.stringify({
        address_name: "isim",
        address_id: "id",
        neighborhood: "mahalle",
        state: "state",
        city: "city",
      }),
    },
    {
      address_details: JSON.stringify({
        address_name: "isim2",
        address_id: "id",
        neighborhood: "mahalle",
        state: "state",
        city: "city",
      }),
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [clickedAddresses, setclickedAddresses] = useState(false);

  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const loggedInUser = useSelector((state) => state.loggedInUser.loggedInUser);
  const clickedLogin = useSelector((state) => state.clickedLogin.clickedLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    setShoppingCartTotal(
      shoppingCart?.reduce((total, element) => {
        return total + element.price * element.count;
      }, 0)
    );
  }, [shoppingCart]);
  const handleHoverShoppingCartMenu = () => {
    setClickedShoppingCart(true);
  };
  const handleQuitShoppingCartMenu = () => {
    setClickedShoppingCart(false);
  };

  const handleClickLogin = () => {
    dispatch(setclickedLogin({ clickedLogin: true }));
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: false }));
  };
  const handleClickAddress = () => {
    dispatch(setclickedLogin({ clickedLogin: false }));
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: true }));
  };
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
            throw new Error(response.status);
          }
          return res.json();
        })
        .then((data) => {
          setupdateOrders(updateOrders + 1);
          console.log(shoppingCart);
        })
        .catch((err) => {
          showToastErrorMessage(
            "Sipariş oluşturulurken bir hata oluştu",
            toast.POSITION.TOP_CENTER
          );
        });
    }
  };

  const selectAddress = async (address_id) => {
    await fetch("http://localhost:3000/addresses/select", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address_id: address_id }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(response.status);
        }
        return res.json();
      })
      .then((data) => {
        setSelectedAddress(address_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickAddresses = () => {
    setclickedAddresses(!clickedAddresses);
    return;
    if (!isLoggedIn) {
      showToastInfoMessage(
        "Adres seçmeden önce giriş yapmalısınız",
        toast.POSITION.TOP_CENTER
      );
      handleClickLogin();
    } else {
      setclickedAddresses(!clickedAddresses);
    }
  };
  return (
    <>
      <div
        style={{
          width: "auto",
          height: "64px",
          display: "flex",
          position: "sticky",
          borderWidth: "10px:",
          boxShadow: "0 6px 20px #a4a4a452",
          top: "0px",
          backgroundColor: "white",
          zIndex: "1000",
          padding: "0px 7rem",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "25%",
            justifyContent: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <div style={{ textAlign: "center", paddingLeft: "5px" }}>Market</div>
        </Link>
        <div
          style={{
            display: "block",
            alignItems: "center",
            minWidth: "50%",
            justifyContent: "center",
            borderLeft: "2px solid " + config.BORDER_COLOR,
            borderRight: "2px solid " + config.BORDER_COLOR,
            flexGrow: "0.6",
          }}
        >
          <div
            onClick={handleClickAddresses}
            style={{
              textAlign: "center",
              paddingLeft: "5px",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            {addresses?.length > 0
              ? JSON.parse(addresses[0].address_details).address_name
              : "adres seçiniz"}
          </div>
          {Array.isArray(addresses) && clickedAddresses ? (
            <ul
              style={{
                border: "2px solid " + config.BORDER_COLOR,
                marginTop: "0px",
                paddingLeft: "0px",
                listStyleType: "none",
              }}
            >
              {addresses.map((address) => {
                const address_details = JSON.parse(address.address_details);
                return (
                  <li
                    onClick={selectAddress(address.address_id)}
                    style={{
                      border: "2px solid " + config.BORDER_COLOR,
                      backgroundColor: "white",
                      height: "70px",
                      display: "flex",
                    }}
                  >
                    <input
                      type="radio"
                      onClick={(event) => {
                        event.target.checked = address.selected;
                      }}
                      style={{}}
                      checked
                    ></input>
                    <div style={{ minWidth: "0" }}>
                      <div>{address_details.address_name}</div>
                      <div>
                        {address_details.neighborhood} / {address_details.state}{" "}
                        / {address_details.city}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        minWidth: "0",
                        marginLeft: "auto",
                      }}
                    >
                      düzenle
                    </div>
                  </li>
                );
              })}
              <li
                onClick={handleClickAddress}
                style={{
                  border: "2px solid " + config.BORDER_COLOR,
                  backgroundColor: "white",
                  height: "70px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "center",
                    height: "50%",
                    backgroundSize: "100%",
                    aspectRatio: "1 / 1",
                    backgroundImage:
                      "url(https://thumbs.dreamstime.com/b/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg)",
                  }}
                ></div>
                <div style={{ minWidth: "0", alignSelf: "center" }}>
                  <div> Yeni Adres Ekle</div>
                </div>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "15%",
            height: "100%",
            marginRight: "0",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-stroke-container"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                cx="12"
                cy="12"
                r="12"
                fill="#D70F64"
                fillRule="nonzero"
              ></circle>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"
              ></path>
            </g>
          </svg>
          {isLoggedIn ? (
            <>
              <div> {loggedInUser} </div>
              <div onClick={handleLogout}> logout </div>
            </>
          ) : (
            <div onClick={handleClickLogin}> Giriş Yap / Kayıt Ol</div>
          )}
        </div>
        <div
          onMouseEnter={handleHoverShoppingCartMenu}
          onClick={handleHoverShoppingCartMenu}
          onMouseLeave={handleQuitShoppingCartMenu}
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "20%",
            height: "100%",
            marginRight: "0",
            borderLeft: "2px solid " + config.BORDER_COLOR,
          }}
        >
          <div
            style={{
              display: "flex",
              height: "50%",
              alignSelf: "center",
              justifyContent: "flex-end",
              paddingLeft: "10px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                maxHeight: "32px",
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/512/649/649931.png')",
                backgroundSize: "100%",
                aspectRatio: "1/1",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div
            style={{
              alignSelf: "center",
              paddingLeft: "10px",
              cursor: "pointer",
            }}
          >
            {" "}
            Sepetim
            <div style={{ width: "100%" }}>{shoppingCartTotal} TL</div>
          </div>
          {clickedShoppingCart ? <ShoppingCart addOrder={addOrder} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Navbar;
