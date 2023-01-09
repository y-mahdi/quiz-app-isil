
import '../Style/SignIn.css';
export default function SignInBody() {
    return(
        <div className="Body-Signin-Container">
            <input type={'text'} placeholder="First Name" /><br />
            <input type={'text'} placeholder="Last Name" /><br />
            <select>
                <option value={'professeur'}>Professeur</option>
                <option value={'etudiant'}>Etudiant</option>
            </select><br/>
            <input type={'email'} placeholder="email" /><br />
            <input type={'password'} placeholder="Password" /><br />
            <input type={'password'} placeholder="Re-write Password" /><br />
            <button>SignIn</button>
        </div>
    )
}