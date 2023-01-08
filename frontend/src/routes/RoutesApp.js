
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../Login/login";
import { Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";
export default function RoutesApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to="/Auth" />} />
                    
                    <Route path='/Auth' element={<Login />}/>
                    
                </Routes>
            </Router>
        </>
    )
}