import SignInBody from "./Components/SignInBody";
import SignInHeader from "./Components/SignInHeader";
import SignInFooter from "./Components/SignInFooter";
import './Style/SignIn.css';
export default function Signup() {
    return (
        <div className="container-signin-panel">
            <SignInHeader />
            <SignInBody />
            <SignInFooter />
        </div>
    )
}