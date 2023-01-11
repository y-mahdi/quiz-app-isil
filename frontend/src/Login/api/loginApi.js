import axios from "axios";

export default async function LoginApi(email,password,type) {
    let data;
    await axios.post('http://localhost:5000/auth',{
        "email":email,
        "password":password,
        "type":type
    }).then((rs)=>{
        data=rs.data;
    }).catch((e)=>{
        console.log(e)
        data={info:false}
    })
    return data;
}