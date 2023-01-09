
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../Login/login";
import { Navigate } from "react-router-dom";
import DashboardProfessor from "../DashboardProfessor/DashboardProfessor";
import Signup from '../Signup/Signup';
import QuestionProfessor from "../questionsProfessor/questionsProfessor";
export default function RoutesApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/*' element={<Navigate to="/Auth" />} />
                    <Route path='/Auth' element={<Login />}/>
                    <Route path="/Signin" element={<Signup />} /> 
                    <Route path="/Professor/Dashboard" element={<DashboardProfessor/>}/>
                    <Route path="/Professor/QuestionsBank" element={<QuestionProfessor />} />
                </Routes>
            </Router>
        </>
    )
}