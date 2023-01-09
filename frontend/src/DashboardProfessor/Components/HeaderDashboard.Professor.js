import quizicon from '../../Icons/quiz.svg';



export default function HeaderDashboardProfessor(Title) {
    return(
        <div className="header-dashboard-professor">
            <div className='icon-quiz-container-logo'>
                <img src={quizicon} alt='quiz icon' width={'50px'} />
                <div>{Title}</div>
            </div>
        </div>
    )
}