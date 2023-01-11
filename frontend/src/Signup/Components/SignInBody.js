
import '../Style/SignIn.css';
import {useState} from 'react';
import AddUser from '../Api/addUserApi';



export default function SignInBody() {
    const [LastName, setLastName] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("")
    const [Password2, setPassword2] = useState("")
    const [UserType, setUserType] = useState("professor");
    const [message, setMessage] = useState("");
    const addUser=async()=>{
        if(LastName=="" || FirstName=="" || email=="" || password1=="" || Password2=="" || password1!=Password2){
            setMessage("*please complete the form")
        }
        else{
            let data=await AddUser((LastName+" "+FirstName),email,password1,UserType);
            setMessage("*Vous etes inscri sur nous site");
            console.log(data);
        }
    }
    return(
        <div className="Body-Signin-Container">
            <input value={FirstName} onChange={(text)=>setFirstName(text.target.value)} type={'text'} placeholder="First Name" /><br />
            <input value={LastName} onChange={(text)=>setLastName(text.target.value)} type={'text'} placeholder="Last Name" /><br />
            <select onChange={(text)=>setUserType(text.target.value)}>
                <option value={'professor'}>Professeur</option>
                <option value={'etudiant'}>Etudiant</option>
            </select><br/>  
            <input value={email} onChange={(text)=>setEmail(text.target.value)} type={'email'} placeholder="email" /><br />
            <input value={password1} onChange={(text)=>setPassword1(text.target.value)} type={'password'} placeholder="Password" /><br />
            <input value={Password2} onChange={(text)=>setPassword2(text.target.value)} type={'password'} placeholder="Re-write Password" /><br />
            <button onClick={()=>addUser()}>SignIn</button>
            <div className='message-add-function'>{message}</div>
        </div>
    )
}