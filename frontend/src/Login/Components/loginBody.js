
import '../Style/login.css';
import {Link} from 'react-router-dom';
export default function LoginBody() {
    return(
        <div>
            <div className="form-container-login">
                <input type='text' placeholder="Email" /><br/>
                <input type='password' placeholder="*******" /><br/>
                <select>
                    <option  value={'professeur'}>Professeur</option>
                    <option value={'etudiant'}>Etudiant</option>
                </select><br/>
                <button>Log in</button>
                <div className="signup-message-panel">
                    if You don't have Already an Account please <Link id='link' to={'/SignIn'}>Sign in</Link>
                </div>
            </div>
            
        </div>
    )
}