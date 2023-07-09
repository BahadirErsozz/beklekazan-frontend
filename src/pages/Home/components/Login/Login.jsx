import { useState } from "react";

const Login = ({handleQuitLogin, handleClickRegister, login}) => {
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
    return (
        <>

        <div style={{ display: "flex", flexDirection: "column" , position: "fixed", borderRadius: "0.25em", top: "15%", right: "30%", zIndex: "9999", height: "70%", width: "40%", backgroundColor: "white", borderStyle: "", borderColor:"#cacaca"}}>
        <div onClick={handleQuitLogin} style={{marginRight: "10px", marginTop: "10px", marginLeft: "auto", borderStyle: "", borderRadius: "50%", height: "10%", aspectRatio: "1 / 1", backgroundSize: "100%", backgroundImage: "url(https://thumbs.dreamstime.com/b/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg)"}}></div>
            <div style={{  padding: "2em", paddingBottom: "0px"}}>
            E-Mail
            <input onChange={handleEmailChange} value={email} style={{ marginBottom: "32px",width: "calc(100% - 70px)",padding: "16px 20px 16px 50px", left: "15%", alignItems: "center", alignContent: "center", display: "flex", border: "1px solid #d2d8d8"}}>
            </input>
            Parola
            <input onChange={handlePasswordChange} value={password} style={{ width: "calc(100% - 70px)",padding: "16px 20px 16px 50px", left: "15%", alignItems: "center", alignContent: "center", display: "flex", border: "1px solid #d2d8d8"}}>
        
            </input>

        </div>
        <div style={{  width: "70%", marginLeft: "15%", marginRight: "15%", textAlign: "right", padding: "10px 20px 10px 50px"}}> Şifremi Unuttum</div>
        <div onClick={handleLogin} style={{  width: "70%", borderStyle: "solid", marginLeft: "15%", marginRight: "15%", textAlign: "center", padding: "10px 0px", backgroundColor: "#ea004b", color: "white"}}> Giriş Yap</div>
        
        <div onClick={handleClickRegister} style={{  width: "70%", marginLeft: "15%", marginRight: "15%", textAlign: "center", padding: "10px 0px"}}> Hesabın yok mu? Kayıt Ol</div>
        </div>
        
        </>
    )
};

export default Login;