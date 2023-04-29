const Navbar = ({ handleClickLogin}) => {
    return (
        <>
        <div style={{width: "100%", height: "64px", display: "flex", position: "sticky", borderWidth: "10px:", boxShadow: "0 0.2rem 1rem rgb(0 0 0 / 12%)", top: "0px", backgroundColor: "white"}}>
            <div style={{display: "flex", alignItems: "center", width: "20%", justifyContent: "center"}}>
                <div style={{textAlign: "center", paddingLeft: "5px"}}>Ersöz Market</div>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "20%", justifyContent: "center", borderLeft: "2px solid #dcdcdc"}}>
                <div style={{textAlign: "center", paddingLeft: "5px"}}>Adres Seçiniz</div>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "20%", justifyContent: "center", borderLeft: "2px solid #dcdcdc", marginLeft: "auto", marginRight: "0"}}>
                <div style={{textAlign: "center", paddingLeft: "5px"}}>Teslimat Zamanı Seçiniz</div>
            </div>
            <div style={{borderLeft: "2px solid #dcdcdc", width: "10%", height: "100%", marginLeft: "auto", marginRight: "0" }}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-stroke-container"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#D70F64" fill-rule="nonzero"></circle><path fill="#FFF" fill-rule="nonzero" d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"></path></g></svg>
                <div onClick={handleClickLogin}> giriş yap</div>
            </div>
        </div>
        </>
    )
};

export default Navbar;