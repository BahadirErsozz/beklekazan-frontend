import "../../css/bootstrap.min.css"
import "../../css/font-awesome.min.css"
import "../../css/prettyPhoto.css"
import "../../css/price-range.css"
import "../../css/animate.css"
import "../../css/main.css"
import "../../css/responsive.css"

import config from "../../datas/config.json"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";

const Navbar = ({ handleQuitShoppingCartMenu, handleHoverShoppingCartMenu, addresses, selectAddress, handleClickAddresses, clickedAddresses, handleClickAddress, handleLogout, handleClickLogin, isLoggedIn, loggedInUser}) => {
    return (
        <>
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
                    <a href="login">
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
    </header>
        {/* <div style={{width: "auto", height: "64px", display: "flex", position: "sticky", borderWidth: "10px:", boxShadow: "0 6px 20px #a4a4a452", top: "0px", backgroundColor: "white", zIndex: "100000", padding: "0px 7rem"}}>
            <div style={{display: "flex", alignItems: "center", minWidth: "25%", justifyContent: "center"}}>
                <div style={{textAlign: "center", paddingLeft: "5px"}}>Market</div>
            </div>
            <div  style={{display: "block", alignItems: "center", minWidth: "50%", justifyContent: "center", borderLeft: "2px solid " + config.BORDER_COLOR, borderRight: "2px solid " + config.BORDER_COLOR, flexGrow: "0.6"}}>
                <div onClick={handleClickAddresses} style={{textAlign: "center", paddingLeft: "5px", width: "100%", height: "100%"}}>{addresses?.length > 0  ? JSON.parse(addresses[0].address_details).address_name :"adres seçiniz"}
                </div>
                {Array.isArray(addresses) && clickedAddresses? 
                <ul style={{border: "2px solid " + config.BORDER_COLOR, marginTop: "0px", paddingLeft: "0px", listStyleType: "none"}}>
                    {addresses.map(address => {
                            const address_details = JSON.parse(address.address_details)
                            return <li onClick={selectAddress(address.address_id)} style={{border: "2px solid " + config.BORDER_COLOR, backgroundColor: "white", height: "70px", display: "flex"}}>
                                <input type="radio" onClick={(event) => { event.target.checked = address.selected}} style={{}} checked></input>
                            <div style={{minWidth: "0"}}>
                                <div>{address_details.address_name}</div>
                                <div>{address_details.neighborhood} / {address_details.state} / {address_details.city}</div>
                            </div>
                            
                            <div style={{display: "flex", alignItems: "center", minWidth: "0", marginLeft: "auto"}}>
                                düzenle
                            </div>
                            </li>
                        })}
                    <li onClick={handleClickAddress} style={{border: "2px solid " + config.BORDER_COLOR, backgroundColor: "white", height: "70px", display: "flex"}}>
                            <div style={{alignSelf: "center", height: "50%", backgroundSize: "100%", aspectRatio: "1 / 1", backgroundImage: "url(https://thumbs.dreamstime.com/b/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg)"}}></div>
                            <div style={{minWidth: "0", alignSelf: "center"}}>
                                <div> Yeni Adres Ekle</div>
                            </div>
                    </li>
                </ul>: ""}
            </div>
            <div style={{ display: "flex", flexDirection: "column" , minWidth: "15%", height: "100%", marginRight: "0", alignItems: "center" }}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg-stroke-container"><g fill="none" fillRule="evenodd"><circle cx="12" cy="12" r="12" fill="#D70F64" fillRule="nonzero"></circle><path fill="#FFF" fillRule="nonzero" d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"></path></g></svg>
                { isLoggedIn 
                ? 
                <>
                <div> {loggedInUser} </div>
                <div onClick={handleLogout}> logout </div>
                </>
                :
                <div onClick={handleClickLogin}> Giriş Yap / Kayıt Ol</div>
                }
            </div>
            <div onMouseEnter={handleHoverShoppingCartMenu} onMouseLeave={handleQuitShoppingCartMenu} style={{ display: "flex", flexDirection: "row" , minWidth: "10%", height: "100%", marginRight: "0", justifyContent: "center", borderLeft: "2px solid " + config.BORDER_COLOR }}> 
                <div style={{display: "flex", minWidth: "50%", height: "50%", alignSelf: "center", justifyContent: "flex-end"}}>
                    <div style={{maxHeight: "32px", backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/649/649931.png')", backgroundSize: "100%", aspectRatio: "1/1", backgroundRepeat: "no-repeat"}}></div>
                </div>
                <div style={{alignSelf: "center"}}> Sepetim
                </div>
            </div>
        </div> */}
        </>
    )
};

export default Navbar;