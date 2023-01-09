
import quizicon from '../../Icons/quiz.svg';
import '../Style/SignIn.css';
import { Link } from 'react-router-dom';
export default function SignInHeader() {
    return(
        <div>
            <div className='logo-app-signin'>
                <img src={quizicon} alt="credit card" width="100px" />
                <div>Quiz Application</div>
            </div>
            <div className='login-message-signin'>
                if You have Already an Account Please <Link id='link' to={'/Auth'}>LogIn</Link>
            </div>
        </div>
    )
}