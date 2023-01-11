import axios from "axios";




export default async function AddQuizApi(nom,questions,datedemmarage,datearret,listesetudiant) {
    await axios.post('http://localhost:5000/quiz',{
        "nom":nom,"quetions":questions,"datedemmarage":datedemmarage,
        "datearret":datearret,"listesetudiant":listesetudiant,
        "auteur":"professor@uca.ma"
    }).then((data)=>{
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })
}