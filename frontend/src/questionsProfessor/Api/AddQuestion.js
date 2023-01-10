import axios from 'axios';

export default async function AddQuestion(question,type,diffculte,bonneReponse,reponseerronee) {
    await axios.post('http://localhost:5000/question',
    {
        "question":question,
        "type":type,
        "difficulte":diffculte,
        "bonnereponse":bonneReponse,
        "reponseerronne":reponseerronee
    }
    ).then((data)=>{
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })
}
