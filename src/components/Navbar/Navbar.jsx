import config from "../../config.json";
import ShoppingCart from "../../pages/Home/components/ShoppingCart/ShoppingCart";
import Login from "../Popups/Login";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { ToastContainer, toast } from "react-toastify";
import { incrementupdateIsLoggedIn } from "../../redux/updateIsLoggedIn";
import { incrementupdateOrders } from "../../redux/updateOrders";
import { incrementupdateAddresses } from "../../redux/updateAddresses";
import { setisLoggedIn } from "../../redux/isLoggedIn";
import { setloggedInUser } from "../../redux/loggedInUser";
import { setselectedAddress } from "../../redux/selectedAddress";
import { setAddresses } from "../../redux/addresses";

import Account from "../HoverMenus/Account";
import SearchBarItems from "../HoverMenus/SearchBarItems";

import location from "./Assets/location.png";
import user from "./Assets/user.png";

const Navbar = ({}) => {
  const [clickedShoppingCart, setClickedShoppingCart] = useState(false);
  const [clickedAccount, setClickedAccount] = useState(false);
  const [clickedSearchBar, setClickedSearchBar] = useState(false);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
  const [clickedAddresses, setclickedAddresses] = useState(false);
  const [serachValue, setSearchValue] = useState("");

  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const addresses = useSelector((state) => state.addresses.addresses);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const selectedAddress = useSelector(
    (state) => state.selectedAddress.selectedAddress
  );
  const loggedInUser = useSelector((state) => state.loggedInUser.loggedInUser);
  const clickedLogin = useSelector((state) => state.clickedLogin.clickedLogin);
  const updateAddresses = useSelector(
    (state) => state.updateAddresses.updateAddresses
  );
  const updateIsLoggedIn = useSelector(
    (state) => state.updateIsLoggedIn.updateIsLoggedIn
  );
  const dispatch = useDispatch();

  const searcBarRef = useRef();

  const handleClickOutside = (e) => {
    if (!searcBarRef.current.contains(e.target)) {
      setClickedSearchBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    fetch("http://localhost:3000/users/isLoggedIn", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("isloggedin: " + data.isLoggedIn);
        dispatch(setisLoggedIn({ isLoggedIn: data.isLoggedIn }));
        dispatch(setloggedInUser({ loggedInUser: data.email }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateIsLoggedIn]);

  useEffect(() => {
    fetch("http://localhost:3000/addresses", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message != null) return;
        dispatch(setAddresses({ address: data.addresses }));
        const selected_address = data.addresses.find((element) => {
          console.log(element);
          return element.selected == 1;
        });
        dispatch(setselectedAddress({ selectedAddress: selected_address }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setShoppingCartTotal(
      shoppingCart?.reduce((total, element) => {
        return total + element.price * element.count;
      }, 0)
    );
  }, [shoppingCart]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);

    console.log("value is:", event.target.value);
  };
  const handleHoverShoppingCartMenu = () => {
    setClickedShoppingCart(true);
  };
  const handleQuitShoppingCartMenu = () => {
    setClickedShoppingCart(false);
  };

  const handleHoverAccount = () => {
    setClickedAccount(true);
  };
  const handleQuitAccount = () => {
    setClickedAccount(false);
  };

  const handleClickSearchBar = () => {
    setClickedSearchBar(true);
  };
  const handleQuitSearchBar = () => {
    setClickedSearchBar(false);
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
  const updateEverything = () => {
    dispatch(incrementupdateOrders({}));
  };

  const updateSelectedAddress = (address_id) => {
    const selected_address = addresses?.find((element) => {
      element.id == address_id;
    });
    dispatch(setselectedAddress({ selectedAddress: selected_address }));
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
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        updateSelectedAddress(address_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickAddresses = () => {
    console.log(addresses);
    if (!isLoggedIn) {
      showToastInfoMessage(
        "Adres seçmeden önce giriş yapmalısınız",
        toast.POSITION.TOP_CENTER
      );
      handleClickLogin();
      return;
    }

    if (addresses?.length <= 0) {
      handleClickAddress();
      return;
    }
    setclickedAddresses(!clickedAddresses);
    console.log(clickedAddresses);
  };

  const logout = async () => {
    return await fetch("http://localhost:3000/users/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(response.status);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(incrementupdateIsLoggedIn({}));
        updateEverything();
        console.log(data.status);
      })
      .catch((err) => {
        console.log(err);
      });
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
          maxWidth: "100vh",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "20%",
            justifyContent: "center",
            textDecoration: "none",
            color: "black",
            borderRight: "2px solid " + config.BORDER_COLOR,
          }}
        >
          <div style={{ textAlign: "center", paddingLeft: "5px" }}>Market</div>
        </Link>
        <div ref={searcBarRef} style={{ minWidth: "35%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "35%",
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              borderRight: "2px solid " + config.BORDER_COLOR,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                border: "solid 1px #c7c8cb",
                borderRadius: "10px",
                margin: "10px",
                display: "flex",
              }}
            >
              <input
                onClick={handleClickSearchBar}
                onChange={handleInputChange}
                value={serachValue}
                style={{
                  minWidth: "80%",
                  height: "auto",
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              ></input>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#034C8E",
                  color: "white",
                  textAlign: "center",
                  margin: "0 auto",
                  cursor: "pointer",
                }}
              >
                {" "}
                Ara
              </div>
            </div>
          </div>
          {clickedSearchBar ? (
            <SearchBarItems serachValue={serachValue}></SearchBarItems>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            display: "block",
            alignItems: "center",
            minWidth: "auto",
            justifyContent: "center",
            borderRight: "2px solid " + config.BORDER_COLOR,
            flexGrow: "0.6",
          }}
        >
          <div
            onClick={handleClickAddresses}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              width: "auto",
              height: "100%",
              paddingRight: "10px",
              cursor: "pointer",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", paddingRight: "40px" }}>
              <img
                src={location}
                style={{
                  maxWidth: "28px",
                  maxHeight: "28px",
                  marginLeft: "10px",
                }}
              />
              <div style={{ paddingLeft: "20px", whiteSpace: "nowrap" }}>
                {selectedAddress?.address_details != undefined ? (
                  <>
                    <div>Teslimat Adresi</div>
                    <div>
                      {
                        JSON.parse(selectedAddress?.address_details)
                          .address_name
                      }{" "}
                    </div>
                  </>
                ) : (
                  "Teslimat Adresi Seçin"
                )}
              </div>
            </div>
            <div style={{ height: "16px", width: "16px" }}>
              {" "}
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                ></path>
              </svg>{" "}
            </div>
          </div>
          {Array.isArray(addresses) && clickedAddresses ? (
            <ul
              style={{
                marginTop: "10px",
                padding: "10px 0",
                minWidth: "100%",
                backgroundColor: "white",
                listStyleType: "none",
                border: "1px solid rgb(220, 220, 220)",
                borderRadius: "8px",
                boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
              }}
            >
              {addresses.map((address) => {
                const address_details = JSON.parse(address.address_details);
                return (
                  <li
                    key={uuidv4()}
                    onClick={() => selectAddress(address.address_id)}
                    style={{
                      backgroundColor: "white",
                      height: "70px",
                      display: "flex",
                      padding: "5px 10px",
                      borderBottom: "1px solid rgb(220, 220, 220)",
                    }}
                  >
                    <input
                      type="radio"
                      onClick={(event) => {
                        event.target.checked = address.selected;
                      }}
                      style={{}}
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
              <div
                onClick={handleClickAddress}
                style={{
                  minWidth: "155px",
                  maxWidth: "155px",
                  height: "20px",
                  padding: "8px",
                  border: "1px solid #dcdcdc",
                  borderRadius: "8px",
                  backgroundColor: "#034C8E",
                  color: "white",
                  textAlign: "center",
                  margin: "10px auto 0 auto",
                  cursor: "pointer",
                }}
              >
                <div>Yeni Adres Ekle</div>
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseEnter={handleHoverAccount}
          onClick={handleHoverAccount}
          onMouseLeave={handleQuitAccount}
        >
          <div
            style={{
              display: "flex",
              minWidth: "200px",
              height: "100%",
              padding: "0 10px",
              marginRight: "0",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "space-between",
            }}
          >
            <img
              src={user}
              style={{
                maxWidth: "28px",
                maxHeight: "28px",
                marginLeft: "10px",
              }}
            />
            {isLoggedIn ? (
              <>
                <div style={{ height: "100%", paddingTop: "20px" }}>
                  {" "}
                  <div style={{ paddingBottom: "5px" }}>Hesabım</div>{" "}
                  <div
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {loggedInUser} asdsa
                  </div>{" "}
                </div>
                <div style={{ height: "16px", width: "16px" }}>
                  {" "}
                  <svg
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-down"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>
                  </svg>{" "}
                </div>
              </>
            ) : (
              <div onClick={handleClickLogin}> Giriş Yap / Kayıt Ol</div>
            )}
          </div>
          {clickedAccount && isLoggedIn ? (
            <Account logout={logout}></Account>
          ) : (
            ""
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
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "50%",
              alignSelf: "center",
              justifyContent: "flex-end",
              padding: "0 10px",
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
          {clickedShoppingCart ? <ShoppingCart /> : ""}
        </div>
      </div>
    </>
  );
};

export default Navbar;
