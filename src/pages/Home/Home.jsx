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
import ContactUs from "./components/ContactUs/ContactUs";
import PopupsContainer from "../../components/Popups/PopupsContainer";
import config from "../../config.json";

import { setisLoggedIn } from "../../redux/isLoggedIn";
import { setloggedInUser } from "../../redux/loggedInUser";
import { setclickedLogin } from "../../redux/clickedLogin";
import { setclickedAddress } from "../../redux/clickedAddress";
import { setclickedRegister } from "../../redux/clickedRegister";
import { incrementupdateIsLoggedIn } from "../../redux/updateIsLoggedIn";
import { incrementupdateOrders } from "../../redux/updateOrders";
import { incrementupdateAddresses } from "../../redux/updateAddresses";
import { addToProducts } from "../../redux/products";
import { addToAnnouncements } from "../../redux/announcements";
import { addToChats } from "../../redux/chats";
import { resetProducts } from "../../redux/products";
import { resetAnnouncements } from "../../redux/announcements";
import Announcements from "./components/Announcements/Announcements";
import Chats from "./components/Chats/Chats";
//import { setOrders } from "../../redux/orders";

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
  const announcements = useSelector(
    (state) => state.announcements.announcements
  );
  const chats = useSelector((state) => state.chats.chats);
  //const orders = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const [clickedAddresses, setclickedAddresses] = useState(false);
  const [clickedShoppingCart, setClickedShoppingCart] = useState(false);
  const [clickedShoppingCartMenu, setClickedShoppingCartMenu] = useState(false);

  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [updateProductCounts, setupdateProductCounts] = useState(0);

  useEffect(() => {
    dispatch(resetProducts({}));
    dispatch(resetAnnouncements({}));

    fetch(config.BACKEND_URL + "chats/getActiveChats", {
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const chat = {
            title: data[i].title,
            id: data[i].chat_id,
            message: data[i].message,
            date_created: data[i].date_created
              .replace("T", " ")
              .substring(0, data[i].date_created.length - 2),
            username: data[i].email,
          };
          dispatch(addToChats({ chat: chat }));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(config.BACKEND_URL + "announcements/getActiveAnnouncements", {
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const announcement = {
            title: data[i].title,
            id: data[i].announcement_id,
            text: data[i].text,
            date: data[i].date,
            image_path: data[i].image_path,
          };
          dispatch(addToAnnouncements({ announcement: announcement }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setAnnouncements([
    //   {
    //     title: "test",
    //     date: "27/10/2024 10:01",
    //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   },
    //   { title: "test2", date: "27/10/2024 10:01" },
    //   { title: "test3", date: "27/10/2024 10:01" },
    //   { title: "test4", date: "27/10/2024 10:01" },
    //   { title: "test5", date: "27/10/2024 10:01" },
    //   { title: "test6", date: "27/10/2024 10:01" },
    //   { title: "test7", date: "27/10/2024 10:01" },
    // ]);
    // dispatch(
    //   addToProducts({
    //     product: {
    //       name: "Raf Etiketi",
    //       id: uuidv4(),
    //       price: "35",
    //       category: "AraçBakim",
    //       deadline: "20 Jul 2024 16:00:00 GMT",
    //       leftAmount: Math.floor((1703188364 - Date.now() / 1000) / 3600),
    //     },
    //   })
    // );

    // dispatch(
    //   addToProducts({
    //     product: {
    //       name: "Karton Araç Kokusu",
    //       id: uuidv4(),
    //       price: "15",
    //       category: "AraçBakim",
    //       deadline: "20 Jul 2024 16:00:00 GMT",
    //       leftAmount: Math.floor((1703188364 - Date.now() / 1000) / 1200),
    //     },
    //   })
    // );

    // dispatch(
    //   addToProducts({
    //     product: {
    //       name: "Muz",
    //       id: uuidv4(),
    //       price: "100",
    //       category: "Meyve",
    //       deadline: "20 Jul 2024 16:00:00 GMT",
    //     },
    //   })
    // );

    // dispatch(
    //   addToProducts({
    //     product: {
    //       name: "Muz",
    //       id: uuidv4(),
    //       price: "100",
    //       category: "Sebze",
    //       deadline: "20 Jul 2024 16:00:00 GMT",
    //       leftAmount: 130,
    //       totalAmount: 230,
    //     },
    //   })
    // );

    // dispatch(
    //   addToProducts({
    //     product: {
    //       name: "Elme",
    //       id: uuidv4(),
    //       price: "100",
    //       category: "Meyve",
    //       deadline: "20 Jul 2024 16:00:00 GMT",
    //       leftAmount: 100,
    //       totalAmount: 300,
    //     },
    //   })
    // );

    fetch(config.BACKEND_URL + "products", {
      credentials: "include",
      mode: "cors",
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
            leftAmount: data[i].leftAmount,
            totalAmount: data[i].totalAmount,
          };
          dispatch(addToProducts({ product: product }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setupdateProductCounts(updateProductCounts + 1);
  }, []);

  useEffect(() => {
    fetch(config.BACKEND_URL + "users/isLoggedIn", {
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
    fetch(config.BACKEND_URL + "orders", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log(dataa.orders[0].order_details);
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
  };
  const productTemplate = (product) => {
    return <div> test {product.name} test</div>;
  };
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

        {/* <div
          style={{
            backgroundImage:
              "url(https://images.deliveryhero.io/image/fd-tr/LH/g3w6-hero.jpg)",
            height: "272px",
            display: "block",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></div> */}
        {announcements.length > 0 ? (
          <div
            style={{
              height: "200px",
              display: "block",
              width: "100%",
              backgroundSize: "cover",
              borderBottom: "solid 1px #dcdcdc",
            }}
          >
            <Announcements announcements={announcements}></Announcements>
            {/* {Array.isArray(orders)
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
            : ""} */}
          </div>
        ) : (
          <div
            style={{
              height: "69px",
              display: "block",
              width: "100%",
              backgroundSize: "cover",
              borderBottom: "solid 1px #dcdcdc",
            }}
          ></div>
        )}

        <div
          style={{
            height: "100%",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex" }}>
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
          <div
            style={{
              marginTop: "50px",
              border: "solid 1px #dcdcdc",
              padding: "10px",
            }}
          >
            <Chats chats={chats}></Chats>
          </div>
        </div>

        <GotoCart></GotoCart>
        <ContactUs></ContactUs>
      </div>
    </>
  );
}

export default Home;
