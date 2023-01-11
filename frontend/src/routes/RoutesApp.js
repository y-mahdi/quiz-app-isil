
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../Login/login";
import { Navigate } from "react-router-dom";
import DashboardProfessor from "../DashboardProfessor/DashboardProfessor";
import Signup from '../Signup/Signup';
import QuestionProfessor from "../questionsProfessor/questionsProfessor";
import QuizProfessor from "../quizesProfessor/quizProfessor";
import EtudiantDashboard from "../EtudiantDashboard/etudiantDashboard";
import QuizStudent from "../quizStudent/quizStudent";
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
                    <Route path="/Professor/Quiz" element={<QuizProfessor />} />
                    <Route path="/Student/Dashboard" element={<EtudiantDashboard />} />
                    <Route path="/Student/Quiz" element={<QuizStudent/>} />
                </Routes>   
            </Router>
        </>
    )
}