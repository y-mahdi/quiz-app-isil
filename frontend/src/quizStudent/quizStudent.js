import HeaderDashboardProfessor from "../DashboardProfessor/Components/HeaderDashboard.Professor"
import FooterDashboardProfessor from "../DashboardProfessor/Components/FooterDashboard.Professor"
import BodyQuizStudent from "./components/BodyQuiz.Student";
import { useState } from "react";
import '../EtudiantDashboard/Style/EtudiantDashboard.css';
export default function QuizStudent() {
    const [Quiz, setQuiz] = useState({"_id":{"$oid":"63beb58cf611587c7c2887b3"},"nom":"Backend Developement","quetions":[{"_id":"63bdbed9e9d97b2832a9766e","question":"Who create javascript","type":"multichoix","difficulte":"facile","bonnereponse":["Founder"],"reponseerronne":["creator of java"],"__v":{"$numberInt":"0"}},{"_id":"63bdd19563643fec9e41eb38","question":"Who create javascript","type":"multichoix","difficulte":"facile","bonnereponse":["Founder"],"reponseerronne":["creator of java","Steve jobs"],"__v":{"$numberInt":"0"}},{"_id":"63bdd1a663643fec9e41eb3a","question":"Who create javascript","type":"multichoix","difficulte":"facile","bonnereponse":["Founder"],"reponseerronne":["creator of java"],"__v":{"$numberInt":"0"}}],"datedemmarage":{"$date":{"$numberLong":"1673446260000"}},"datearret":{"$date":{"$numberLong":"1673453460000"}},"listesetudiant":["add@gmail.com","Scc@gmail.com"],"lalistesdestentative":[],"auteur":"professor@uca.ma","__v":{"$numberInt":"0"}})
    return(
        <div className="container-dashboard-student">
            {HeaderDashboardProfessor(Quiz.nom)}
            {BodyQuizStudent(Quiz)}
           <FooterDashboardProfessor/> 
        </div>
    )
}