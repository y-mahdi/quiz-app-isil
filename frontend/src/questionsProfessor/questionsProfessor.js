import BodyQuestionsProfessor from "./Components/BodyQuestionsProfessor";
import HeaderDashboardProfessor from "../DashboardProfessor/Components/HeaderDashboard.Professor";
import FooterDashboardProfessor from "../DashboardProfessor/Components/FooterDashboard.Professor";
import './Style/QuestionProfessor.css';

export default function QuestionProfessor() {
    return(
        <div className="container-question-professor">
            {HeaderDashboardProfessor("Questions")}
            <BodyQuestionsProfessor />
            <FooterDashboardProfessor />
        </div>
    )
}