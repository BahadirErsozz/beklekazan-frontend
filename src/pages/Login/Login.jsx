import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }; 

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleLogin = () => {
        login(email, password)
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
        //   setTriggerIsLoggedIn(!triggerIsLoggedIn)
        //   setIsLoggedIn(data.isLoggedIn)
        //   setLoggedInUser(data.email)
        //   setclickedLogin(false)
        //   updateEverything()
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
  return(
    <>
    <ToastContainer/>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/*[if lt IE 9]>
    
    
    <![endif]*/}
  <link rel="shortcut icon" href="images/ico/favicon.ico" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="images/ico/apple-touch-icon-144-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="images/ico/apple-touch-icon-114-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="images/ico/apple-touch-icon-72-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    href="images/ico/apple-touch-icon-57-precomposed.png"
  />
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
                  <a href="">
                    <i className="fa fa-phone" /> +2 95 01 88 821
                  </a>
                </li>
                <li>
                  <a href="">
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
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="">
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
                <img src="images/home/logo.png" alt="" />
              </a>
            </div>
            <div className="btn-group pull-right">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Canada</a>
                  </li>
                  <li>
                    <a href="">UK</a>
                  </li>
                </ul>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Canadian Dollar</a>
                  </li>
                  <li>
                    <a href="">Pound</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="shop-menu pull-right">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">
                    <i className="fa fa-user" /> Account
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-star" /> Wishlist
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
                  <a href="login.html" className="active">
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
                  <a href="index.html">Home</a>
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
                      <a href="login.html" className="active">
                        Login
                      </a>
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
  <section id="form">
    {/*form*/}
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-1">
          <div className="login-form">
            {/*login form*/}
            <h2>Login to your account</h2>
            <form action="#">
              <input onChange={handleEmailChange} value={email} type="text" placeholder="E-Mail" />
              <input onChange={handlePasswordChange} value={password} placeholder="Şifre" />
              <span>
                <input type="checkbox" className="checkbox" />
                Keep me signed in
              </span>
              <button className="btn btn-default" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
          {/*/login form*/}
        </div>
        <div className="col-sm-1">
          <h2 className="or">OR</h2>
        </div>
        <div className="col-sm-4">
          <div className="signup-form">
            {/*sign up form*/}
            <h2>New User Signup!</h2>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="btn btn-default">
                Signup
              </button>
            </form>
          </div>
          {/*/sign up form*/}
        </div>
      </div>
    </div>
  </section>
  {/*/form*/}
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
                    <img src="images/home/iframe1.png" alt="" />
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
                    <img src="images/home/iframe2.png" alt="" />
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
                    <img src="images/home/iframe3.png" alt="" />
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
                    <img src="images/home/iframe4.png" alt="" />
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
              <img src="images/home/map.png" alt="" />
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
                  <a href="">Online Help</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Order Status</a>
                </li>
                <li>
                  <a href="">Change Location</a>
                </li>
                <li>
                  <a href="">FAQ’s</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Quock Shop</h2>
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a href="">T-Shirt</a>
                </li>
                <li>
                  <a href="">Mens</a>
                </li>
                <li>
                  <a href="">Womens</a>
                </li>
                <li>
                  <a href="">Gift Cards</a>
                </li>
                <li>
                  <a href="">Shoes</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Policies</h2>
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Privecy Policy</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
                <li>
                  <a href="">Billing System</a>
                </li>
                <li>
                  <a href="">Ticket System</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>About Shopper</h2>
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a href="">Company Information</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Store Location</a>
                </li>
                <li>
                  <a href="">Affillate Program</a>
                </li>
                <li>
                  <a href="">Copyright</a>
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
              <a target="_blank" href="http://www.themeum.com">
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

export default Login
