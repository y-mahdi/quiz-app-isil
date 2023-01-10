import axios from "axios";


export default async function GetQuestions() {
    let array=[]
    await axios.get('http://localhost:5000/question').then((rs)=>{
        array=rs.data;
    }).catch((e)=>{
        console.log(e)
    })
    return array;
}