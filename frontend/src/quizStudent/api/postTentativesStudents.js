import axios from "axios";


export default async function PostTentativeStudent(idquiz,email,tentatives) {
    await axios.put('http://localhost:5000/tentatives/'+idquiz,{
        "etudiant":email,
        "tentatives":tentatives
    }).then(()=>{
        console.log(idquiz+" is updated");
    }).catch((e)=>{
        console.log(e)
    })
}