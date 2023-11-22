import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar/Navbar";
import LeftNavigation from "./components//LeftNav/LeftNavigation";
import ProductList from "./components//Products/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "../../components/Popups/Login";
import Register from "../../components/Popups/Register";
import Address from "../../components/Popups/Address";
import GotoCart from "./components/GotoCart/GotoCart";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import config from "./datas/config.json";

import { setisLoggedIn } from "../../redux/isLoggedIn";
import { setloggedInUser } from "../../redux/loggedInUser";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { incrementupdateIsLoggedIn } from "../../redux/updateIsLoggedIn";
import { incrementupdateOrders } from "../../redux/updateOrders";
import { incrementupdateAddresses } from "../../redux/updateAddresses";
import { addToProducts } from "../../redux/products";
import { resetProducts } from "../../redux/products";

function Home() {
  const [produacts, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const loggedInUser = useSelector((state) => state.loggedInUser.loggedInUser);
  const clickedLogin = useSelector((state) => state.clickedLogin.clickedLogin);
  const clickedRegister = useSelector(
    (state) => state.clickedRegister.clickedRegister
  );
  const clickedAddress = useSelector(
    (state) => state.clickedAddress.clickedAddress
  );
  const updateIsLoggedIn = useSelector(
    (state) => state.updateIsLoggedIn.updateIsLoggedIn
  );
  const updateOrders = useSelector((state) => state.updateOrders.updateOrders);
  const products = useSelector((state) => state.products.products);
 

  const dispatch = useDispatch();

  const [clickedAddresses, setclickedAddresses] = useState(false);
  const [clickedShoppingCart, setClickedShoppingCart] = useState(false);
  const [clickedShoppingCartMenu, setClickedShoppingCartMenu] = useState(false);

  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [updateProductCounts, setupdateProductCounts] = useState(0);

  useEffect(() => {
    dispatch(resetProducts({}));
    fetch("http://localhost:3000/products", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const product = {
            name: data[i].name,
            id: data[i].product_id,
            price: data[i].price,
            category: data[i].category,
            deadline: data[i].deadline,
          }
          dispatch(addToProducts({ product: product }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setupdateProductCounts(updateProductCounts + 1)
  }, []);
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
    fetch("http://localhost:3000/orders", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log("hey" + dataa);
        setOrders(dataa.orders);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [updateOrders]);

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
  const handleHoverShoppingCart = () => {
    setClickedShoppingCart(true);
  };
  const handleQuitShoppingCart = () => {
    setClickedShoppingCart(false);
  };
  const handleHoverShoppingCartMenu = () => {
    setClickedShoppingCartMenu(true);
  };
  const handleQuitShoppingCartMenu = () => {
    setClickedShoppingCartMenu(false);
  };

  const closeEverything = () => {
    dispatch(setclickedRegister({ clickedRegister: false }));
    dispatch(setclickedAddress({ clickedAddress: false }));
    dispatch(setclickedLogin({ clickedLogin: false }));
    setClickedShoppingCart(false);
  };

  const handleClickAddresses = () => {
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

  const showToastInfoMessage = (mesage, poisition) => {
    toast.info(mesage, {
      position: poisition,
    });
  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <PopupsContainer></PopupsContainer>

      <div
        style={{
          opacity:
            clickedLogin || clickedRegister || clickedAddress ? "0.3" : "",
        }}
      >
        <Navbar />
        <div
          style={{
            backgroundImage:
              "url(https://images.deliveryhero.io/image/fd-tr/LH/g3w6-hero.jpg)",
            height: "272px",
            display: "block",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            height: "69px",
            display: "block",
            width: "100%",
            backgroundSize: "cover",
            borderBottom: "solid 1px #dcdcdc",
          }}
        >
          {Array.isArray(orders)
            ? orders.map((product) => {
                const product_status = product.order_status + "";
                console.log(product_status);
                return (
                  <div style={{ marginLeft: "30%" }} key={uuidv4()}>
                    {" "}
                    {product.order_date} : {product.order_address} :{" "}
                    {config.ORDER_STATUS[product_status]}
                  </div>
                );
              })
            : ""}
        </div>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <LeftNavigation
            products={products}
            updateProductCounts={updateProductCounts}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          ></LeftNavigation>
          <ProductList
            products={products}
            selectedCategory={selectedCategory}
          ></ProductList>
        </div>
        <GotoCart></GotoCart>
      </div>
    </>
  );
}

export default Home;
