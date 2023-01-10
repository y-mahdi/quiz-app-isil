import './Style/quizProfessor.css';
import HeaderDashboardProfessor from "../DashboardProfessor/Components/HeaderDashboard.Professor";
import FooterDashboardProfessor from "../DashboardProfessor/Components/FooterDashboard.Professor";
import BodyQuizProfessor from './Components/BodyQuiz.Professor';


export default function QuizProfessor() {
    return(
        <div className='container-quiz-professor'>
            {HeaderDashboardProfessor("Quiz")}
            <BodyQuizProfessor />
            <FooterDashboardProfessor />
        </div>
    )
}