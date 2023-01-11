import axios from "axios";


export default async function DeleteQuestion(id) {
    await axios.delete('http://localhost:5000/question/'+id).then((msg)=>{
        console.log(msg)
    }).catch((e)=>{
        console.log(e);
    })
}