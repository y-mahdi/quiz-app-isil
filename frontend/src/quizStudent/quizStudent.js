import HeaderDashboardProfessor from "../DashboardProfessor/Components/HeaderDashboard.Professor"
import FooterDashboardProfessor from "../DashboardProfessor/Components/FooterDashboard.Professor"
import BodyQuizStudent from "./components/BodyQuiz.Student";

import '../EtudiantDashboard/Style/EtudiantDashboard.css';
import { useLocation } from "react-router-dom";
export default function QuizStudent() {
    let data=useLocation()
    return(
        <div className="container-dashboard-student">
            {HeaderDashboardProfessor(data.state.quiz.nom)}
            {BodyQuizStudent(data.state.quiz,data.state.user)}
           <FooterDashboardProfessor/> 
        </div>
    )
}