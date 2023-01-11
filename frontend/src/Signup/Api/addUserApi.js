import axios from "axios";

export default async function AddUser(nom,email,password,type) {
    await axios.post('http://localhost:5000/user',{
        "nom":nom,
        "type":type,
        "password":password,
        "email":email
    }).then((data)=>{
        return(data.data)
    }).catch((e)=>{
        console.log(e)
    })
}