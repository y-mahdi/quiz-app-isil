import axios from "axios";



export default async function GetQuizes() {
    let array=[]
    await axios.get('http://localhost:5000/').then((res)=>{
        array=res.data;
    })
    return array;
}