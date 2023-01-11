
import '../Style/login.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import LoginApi from '../api/loginApi';
import { useNavigate } from 'react-router-dom';
export default function LoginBody() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [TypeUser, setTypeUser] = useState("");
    const [Message, setMessage] = useState("");
    const Navigate=useNavigate();
    const LoginFunct=async()=>{
        let data=await LoginApi(email,password,TypeUser);
        console.log(data)
        if(data.info){
            // setMessage("Info Correct");
            if(TypeUser=='etudiant'){
                Navigate('/Student/Dashboard',{state:{user:data.data}})
            }else{
                Navigate('/Professor/Dashboard',{state:{user:data.data}})
            }
        }
        else{
            setMessage("Info Incorrect");
        }
    }
    return(
        <div>
            <div className="form-container-login">
                <input value={email} onChange={(text)=>setEmail(text.target.value)} type='text' placeholder="Email" /><br/>
                <input value={password} onChange={(text)=>setPassword(text.target.value)} type='password' placeholder="*******" /><br/>
                <select onChange={(text)=>setTypeUser(text.target.value)}>
                    <option  value={'professor'}>Professeur</option>
                    <option value={'etudiant'}>Etudiant</option>
                </select><br/>
                <button onClick={()=>LoginFunct()}>Log in</button>
                <div className="signup-message-panel">
                    if You don't have Already an Account please <Link id='link' to={'/SignIn'}>Sign in</Link>
                </div>
            </div>
            <div className='message-add-function'>{Message}</div>
        </div>
    )
}