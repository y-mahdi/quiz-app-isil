
import HeaderLogin from "./Components/headerlogin";
import FooterLogin from "./Components/footerlogin";
import LoginBody from "./Components/loginBody";
import './Style/login.css';
export default function Login() {
    return(
        <div className="container-login-panel">
            <HeaderLogin />
            <LoginBody />
            <FooterLogin />
        </div>
    )
}