// import "./style.css"
const Login = ({handleQuitLogin}) => {
    return (
        <>

        <div style={{ display: "flex", flexDirection: "column" , position: "fixed", borderRadius: "0.25em", top: "15%", right: "30%", zIndex: "9999", height: "70%", width: "40%", backgroundColor: "white", borderStyle: "solid", borderColor:"#cacaca"}}>
        <div onClick={handleQuitLogin} style={{marginRight: "10px", marginTop: "10px", marginLeft: "auto", borderStyle: "", borderRadius: "50%", height: "10%", aspectRatio: "1 / 1", backgroundSize: "100%", backgroundImage: "url(https://img.freepik.com/free-icon/x-symbol_318-1407.jpg)"}}></div>
            <div style={{  padding: "2em", paddingBottom: "0px"}}>
            Kullanıcı adı veya E-Mail
            <input style={{ marginBottom: "32px",width: "calc(100% - 70px)",padding: "16px 20px 16px 50px", left: "15%", alignItems: "center", alignContent: "center", display: "flex", border: "1px solid #d2d8d8"}}>
            </input>
            Şifre
            <input style={{ width: "calc(100% - 70px)",padding: "16px 20px 16px 50px", left: "15%", alignItems: "center", alignContent: "center", display: "flex", border: "1px solid #d2d8d8"}}>
        
            </input>

        </div>
        <div style={{  width: "70%", marginLeft: "15%", marginRight: "15%", textAlign: "right", padding: "10px 20px 10px 50px"}}> Şifremi Unuttum</div>
        <div style={{  width: "70%", borderStyle: "solid", marginLeft: "15%", marginRight: "15%", textAlign: "center", padding: "10px 0px"}}> Giriş Yap</div>
        
        <div style={{  width: "70%", marginLeft: "15%", marginRight: "15%", textAlign: "center", padding: "10px 0px"}}> Hesabın yok mu? Kayıt Ol</div>
        </div>
        
        </>
    )
};

export default Login;