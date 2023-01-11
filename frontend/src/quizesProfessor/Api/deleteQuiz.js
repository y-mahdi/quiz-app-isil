import axios from "axios";


export default async function DeleteQuizApi(id) {
    await axios.delete('http://localhost:5000/quiz/'+id).then((rs)=>{
        console.log(rs)
    }).catch((e)=>{
        console.log(e)
    })
}