
import quiz from '../../Icons/quiz.svg';
import '../Style/login.css';
export default function HeaderLogin() {
    return (
        <div>
            <div className="logo-panel-header">
                <img src={quiz} alt="credit card icon" width="100px"/>
                <div>Quiz Application</div>
            </div>
        </div>
    )
}