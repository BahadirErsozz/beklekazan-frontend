import "./css/bootstrap.min.css"
import "./css/font-awesome.min.css"
import "./css/prettyPhoto.css"
import "./css/price-range.css"
import "./css/animate.css"
import "./css/main.css"
import "./css/responsive.css"

import { useState } from "react"
import { useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar/Navbar"
import LeftNavigation from "./components//LeftNav/LeftNavigation"
import ProductList from "./components//Products/ProductList"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Address from "./components/Address/Address"
import config from "./datas/config.json"



function Home() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [clickedLogin, setclickedLogin] = useState(false)
  const [clickedRegister, setclickedRegister] = useState(false)
  const [clickedAddress, setclickedAddress] = useState(false)
  const [clickedAddresses, setclickedAddresses] = useState(false)
  const [clickedShoppingCart, setClickedShoppingCart] = useState(false)
  const [clickedShoppingCartMenu, setClickedShoppingCartMenu] = useState(false)

  const [orders, setOrders] = useState([])
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [updateOrders, setupdateOrders] = useState(0)
  const [updateAddresses, setupdateAddresses] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState("")
  const [triggerIsLoggedIn, setTriggerIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/products',{
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((data) => {
          setProducts([])
          for (let i = 0; i < data.length; i++) {
            setProducts(oldArray => {
              return [...oldArray, {name: data[i].name, id: uuidv4(), price: data[i].price, category: "Meyve", deadline: data[i].deadline}]
            })}
         })
         .catch((err) => {
            console.log(err);
         });
    
    for (let i = 0; i < 10; i++){
      setProducts(oldArray => {
        return [...oldArray, {name: "muz", id: uuidv4(), price: 100, category: "Meyve", deadline: "10 Jul 2023 16:00:00 GMT", sold_amount: "50/100"}]
      })
    }
    
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "elma", id: uuidv4(), price: 100, category: "Sebze"}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "çilek", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
    // setProducts(oldArray => {
    //   return [...oldArray, {name: "muz", id: uuidv4(), price: 100}]
    // })
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/users/isLoggedIn',{
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((data) => {
          console.log("isloggedin: " + data.isLoggedIn)
          setIsLoggedIn(data.isLoggedIn)
          setLoggedInUser(data.email)
         })
         .catch((err) => {
            console.log(err);
         });
  }, [triggerIsLoggedIn])

  useEffect(() => {
    fetch('http://localhost:3000/addresses',{
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((data) => {
          setAddresses(data.addresses)
          console.log(data.addresses)
         })
         .catch((err) => {
            console.log(err);
         });
  }, [updateAddresses])

  useEffect(() => {
    fetch('http://localhost:3000/orders', {
      'credentials': 'include',
    })
         .then((res) => res.json())
         .then((dataa) => {
          console.log("hey" + dataa)
          setOrders(dataa.orders)
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [updateOrders]) 

  const addItemToCart = (id) => {
    if (itemExistsOnCart(id)) {
      const newShoppingCart = shoppingCart.map(obj => {
        if (obj.id === id){
          return {...obj, count: obj.count + 1}
        }
        return obj
      })
      setShoppingCart(newShoppingCart)
    }
    else {
      setShoppingCart(oldArray => {
        const product = products.find(product => product.id === id);
        product.count = 1
        return [...oldArray, product]
      })
    }
  }

  const removeItemFromCart = (id) => {
    const newShoppingCart = shoppingCart.map(obj => {
      if (obj.id === id){
        return {...obj, count: obj.count - 1}
      }
      return obj
    })
    setShoppingCart(newShoppingCart.filter(obj => obj.count > 0))
  }

  const itemExistsOnCart = (id) => {
    return shoppingCart.find(product => product.id === id) !== undefined;
  }

  const updateEverything = () => {
    setupdateAddresses(updateAddresses + 1)
    setupdateOrders(updateOrders + 1)
  }
  const handleClickLogin = () => {
      setclickedLogin(true)
      setclickedRegister(false)
      setclickedAddress(false)
  }
  const handleClickRegister = () => {
    setclickedRegister(true)
    setclickedLogin(false)
    setclickedAddress(false)
  }
  const handleClickAddress = () => {
    setclickedAddress(true)
    setclickedRegister(false)
    setclickedLogin(false)
  }
  const handleHoverShoppingCart = () => {
    setClickedShoppingCart(true)
  }
  const handleQuitShoppingCart = () => {
    setClickedShoppingCart(false)
  }
  const handleHoverShoppingCartMenu = () => {
    setClickedShoppingCartMenu(true)
  }
  const handleQuitShoppingCartMenu = () => {
    setClickedShoppingCartMenu(false)
  }

  const closeEverything = () => {
    setclickedRegister(false)
    setclickedAddress(false)
    setclickedLogin(false)
    setClickedShoppingCart(false)
  }

  const handleClickAddresses = () => {
    if (!isLoggedIn) {
      showToastInfoMessage("Adres seçmeden önce giriş yapmalısınız", toast.POSITION.TOP_CENTER)
      handleClickLogin()
    }
    else {
      setclickedAddresses(!clickedAddresses)
    }
  }

  const handleQuitLogin = () => {
    setclickedLogin(false)
  }
  const handleQuitRegister = () => {
    setclickedRegister(false)
  }
  const handleQuitAddress = () => {
    setclickedAddress(false)
  }

  const showToastSuccessMessage = (mesage, poisition) => {
    toast.success(mesage, {
        position: poisition
    });
  };

  const showToastErrorMessage = (mesage, poisition) => {
    toast.error(mesage, {
        position: poisition
    });
  };

  const showToastInfoMessage = (mesage, poisition) => {
    toast.info(mesage, {
        position: poisition
    });
  };


  const addOrder = async () => {
    if (!isLoggedIn) {
      showToastInfoMessage("Sipariş vermeden önce giriş yapmalısınız", toast.POSITION.TOP_CENTER)
      handleClickLogin()
    }
    else {
      return await fetch(
        "http://localhost:3000/orders",
        {
          method: "POST",
          'credentials': 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({shopping_cart: shoppingCart, order_date: Date.now(), order_status: 0, order_address: "empty address", address_id: selectedAddress}),
        }
      ).then((res) => {
        if (res.status !== 200) {
          throw new Error(response.status);
        }
        return res.json()
      })
      .then((data) => {
          setupdateOrders(updateOrders + 1)
          console.log(shoppingCart)
        }
      )
      .catch((err) => {
        showToastErrorMessage('Sipariş oluşturulurken bir hata oluştu', toast.POSITION.TOP_CENTER)
      });
    }
  }

  const login = async (email, password) => {
    return await fetch(
      "http://localhost:3000/users/login",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    )
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(response.status);
      }
      return res.json()
    })
    .then((data) => {
      setTriggerIsLoggedIn(!triggerIsLoggedIn)
      setIsLoggedIn(data.isLoggedIn)
      setLoggedInUser(data.email)
      setclickedLogin(false)
      updateEverything()
      showToastSuccessMessage('Başarıyla giriş yapıldı', toast.POSITION.TOP_CENTER)
    })
    .catch((err) => {
      showToastErrorMessage('Giriş yaparken bir hata oluştu', toast.POSITION.TOP_CENTER)
    });
  }

  const register = async (email, password) => {
    return await fetch(
      "http://localhost:3000/users/register",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    )
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(response.status);
      }
      return res.json()
    })
    .then((data) => {
      setTriggerIsLoggedIn(!triggerIsLoggedIn)
      setclickedRegister(false)
      updateEverything()
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const logout = async () => {
    return await fetch(
      "http://localhost:3000/users/logout",
      {
        method: "POST",
        'credentials': 'include',
      }
    )
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(response.status);
      }
      return res.json()
    })
    .then((data) => {
      setTriggerIsLoggedIn(!triggerIsLoggedIn)
      updateEverything()
      console.log(data.status)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const selectAddress = async (address_id) => {
    await fetch(
      "http://localhost:3000/addresses/select",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({address_id: address_id}),
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw new Error(response.status);
      }
      return res.json()
    })
    .then((data) => {
      setSelectedAddress(address_id);
    })
    .catch((err) => {
      console.log(err)
    });
  } 
  
  const createAddress = async (address_details) => {
    return await fetch(
      "http://localhost:3000/addresses",
      {
        method: "POST",
        'credentials': 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({address_details: address_details, created_at: Date.now()}),
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw new Error(response.status);
      }
      return res.json()
    })
    .then((data) => {
      setupdateAddresses(updateAddresses + 1)
      setclickedAddress(false)
      selectAddress(data.address_id)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return(
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Home | E-Shopper</title>
    {/*/head*/}
    <header id="header">
      {/*header*/}
      <div className="header_top">
        {/*header_top*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" /> +2 95 01 88 821
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" /> info@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header_top*/}
      <div className="header-middle">
        {/*header-middle*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <a href="index.html">
                  <div style={{color: "black"}}> Market</div>
                </a>
              </div>
              <div className="btn-group pull-right">
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Hesabım
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" /> Favorilerim
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="fa fa-crosshairs" /> Checkout
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="fa fa-shopping-cart" /> Cart
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-lock" /> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-middle*/}
      <div className="header-bottom">
        {/*header-bottom*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <a href="index.html" className="active">
                      Home
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Shop
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <a href="shop.html">Products</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Blog
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-bottom*/}
    </header>
    {/*/header*/}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">
                {/*category-productsr*/}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#sportswear"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus" />
                        </span>
                        Sportswear
                      </a>
                    </h4>
                  </div>
                  <div id="sportswear" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="#">Nike </a>
                        </li>
                        <li>
                          <a href="#">Under Armour </a>
                        </li>
                        <li>
                          <a href="#">Adidas </a>
                        </li>
                        <li>
                          <a href="#">Puma</a>
                        </li>
                        <li>
                          <a href="#">ASICS </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#mens"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus" />
                        </span>
                        Mens
                      </a>
                    </h4>
                  </div>
                  <div id="mens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="#">Fendi</a>
                        </li>
                        <li>
                          <a href="#">Guess</a>
                        </li>
                        <li>
                          <a href="#">Valentino</a>
                        </li>
                        <li>
                          <a href="#">Dior</a>
                        </li>
                        <li>
                          <a href="#">Versace</a>
                        </li>
                        <li>
                          <a href="#">Armani</a>
                        </li>
                        <li>
                          <a href="#">Prada</a>
                        </li>
                        <li>
                          <a href="#">Dolce and Gabbana</a>
                        </li>
                        <li>
                          <a href="#">Chanel</a>
                        </li>
                        <li>
                          <a href="#">Gucci</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#womens"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus" />
                        </span>
                        Womens
                      </a>
                    </h4>
                  </div>
                  <div id="womens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="#">Fendi</a>
                        </li>
                        <li>
                          <a href="#">Guess</a>
                        </li>
                        <li>
                          <a href="#">Valentino</a>
                        </li>
                        <li>
                          <a href="#">Dior</a>
                        </li>
                        <li>
                          <a href="#">Versace</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Kids</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Fashion</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Households</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Interiors</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Clothing</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Bags</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Shoes</a>
                    </h4>
                  </div>
                </div>
              </div>
              {/*/category-products*/}
              <div className="brands_products">
                {/*brands_products*/}
                <h2>Brands</h2>
                <div className="brands-name">
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(50)</span>Acne
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(56)</span>Grüne Erde
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(27)</span>Albiro
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(32)</span>Ronhill
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(5)</span>Oddmolly
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(9)</span>Boudestijn
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span className="pull-right">(4)</span>Rösch creative
                        culture
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/brands_products*/}
              <div className="price-range">
                {/*price-range*/}
                <h2>Price Range</h2>
                <div className="well text-center">
                  <input
                    type="text"
                    className="span2"
                    defaultValue=""
                    data-slider-min={0}
                    data-slider-max={600}
                    data-slider-step={5}
                    data-slider-value="[250,450]"
                    id="sl2"
                  />
                  <br />
                  <b className="pull-left">$ 0</b>{" "}
                  <b className="pull-right">$ 600</b>
                </div>
              </div>
              {/*/price-range*/}
              <div className="shipping text-center">
                {/*shipping*/}
                <img src="./images/home/shipping.jpg" alt="" />
              </div>
              {/*/shipping*/}
            </div>
          </div>
          <div className="col-sm-9 padding-right">
            <div className="features_items">
              {/*features_items*/}
              <h2 className="title text-center">En Çok Öne Çıkanlar</h2>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="https://images.deliveryhero.io/image/fd-tr/mahalleproductimages/00000002150561.jpg?height=140&dpi=2" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black aaEdition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to wisqqhlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-plus-square" />
                          Add to compare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*features_items*/}
            <div className="category-tab">
              {/*category-tab*/}
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tshirt" data-toggle="tab">
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a href="#blazers" data-toggle="tab">
                      Blazers
                    </a>
                  </li>
                  <li>
                    <a href="#sunglass" data-toggle="tab">
                      Sunglass
                    </a>
                  </li>
                  <li>
                    <a href="#kids" data-toggle="tab">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a href="#poloshirt" data-toggle="tab">
                      Polo shirt
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active in" id="tshirt">
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="blazers">
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="sunglass">
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="kids">
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="poloshirt">
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="./images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/category-tab*/}
            <div className="recommended_items">
              {/*recommended_items*/}
              <h2 className="title text-center">recommended items</h2>
              <div
                id="recommended-item-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="./images/home/recommend3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="left recommended-item-control"
                  href="#recommended-item-carousel"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="right recommended-item-control"
                  href="#recommended-item-carousel"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            {/*/recommended_items*/}
          </div>
        </div>
      </div>
    </section>
    <footer id="footer">
      {/*Footer*/}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2>
                  <span>e</span>-shopper
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src="./images/home/iframe1.png" alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o" />
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src="./images/home/iframe2.png" alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o" />
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src="./images/home/iframe3.png" alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o" />
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src="./images/home/iframe4.png" alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o" />
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="address">
                <img src="./images/home/map.png" alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Service</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">Online Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Change Location</a>
                  </li>
                  <li>
                    <a href="#">FAQ’s</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Quock Shop</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">T-Shirt</a>
                  </li>
                  <li>
                    <a href="#">Mens</a>
                  </li>
                  <li>
                    <a href="#">Womens</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Policies</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privecy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Billing System</a>
                  </li>
                  <li>
                    <a href="#">Ticket System</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">Company Information</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Store Location</a>
                  </li>
                  <li>
                    <a href="#">Affillate Program</a>
                  </li>
                  <li>
                    <a href="#">Copyright</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <form action="#" className="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-arrow-circle-o-right" />
                  </button>
                  <p>
                    Get the most recent updates from <br />
                    our site and be updated your self...
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
            <p className="pull-right">
              Designed by{" "}
              <span>
                <a target="blank" href="http://www.themeum.com">
                  Themeum
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
    {/*/Footer*/}
  </>
  
  )
}

export default Home
