import closeIcon from '../../Icons/close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddQuizPopup(open,closeFunc) {
    const [QuizName, setQuizName] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [Tentatives, setTentatives] = useState();
    const [ExactStudent, setExactStudent] = useState("");
    const [ListStudents, setListStudents] = useState([]);
    const [ListQuestions, setListQuestions] = useState([])
    const [SelectedQuestions, setSelectedQuestions] = useState([])
    const addStudent=()=>{
        let array=[]
        array=ListStudents;
        if(!array.includes[ExactStudent]){
            setListStudents(ListStudents=>[...ListStudents,ExactStudent]);
        }
        else{
            alert(ExactStudent+" deja existe");
        }
        setExactStudent("");
    }
    if (open) {
        return(
            <div className="addQuiz-popup-container">
                <button className='close-button-top-right' onClick={closeFunc}><img src={closeIcon} width="40px" alt='close icon '/></button>
                <div className="quiz-popup-title">Ajoute un Quiz</div>
                <div className="df-form-addquiz">
                    <div className="df-form-addquiz-part1">
                        <div className="input-label">Nom du Quiz</div>
                        <input placeholder="le Nom du Quiz" value={QuizName} onChange={(text)=>setQuizName(text.target.value)} />
                        <div className="input-label">date de démarrage</div>
                        <input type={'datetime-local'} value={StartDate} onChange={(text)=>setStartDate(text.target.value)} />
                        <div className="input-label">date d’arrêt</div>
                        <input type={'datetime-local'} value={endDate} onChange={(text)=>setEndDate(text.target.value)}  />
                        <div className="input-label">Nombre des Tentatives</div>
                        <input type={'number'} placeholder='Nombre de Tentative' value={Tentatives} onChange={(numb)=>setTentatives(parseInt(numb.target.value))}/>
                        <div className="input-label">l'Additions des Etudiants</div>
                        <input type={'email'} placeholder="L'email d'Etudiant" value={ExactStudent} onChange={(text)=>setExactStudent(text.target.value)} /><br/>
                        <button onClick={addStudent}>Ajoute</button>
                    </div>
                    <div className="df-form-addquiz-part2">
                        <div className="input-label">Selectionner les questions</div>
                        <div className="scroll-bar-question-container">

                        </div>
                        <div className="input-label">La Liste des Etudiants</div>
                        <div className="scroll-bar-students-container">
                                {
                                    ListStudents.map((St)=>{
                                        return(
                                            <div className='etudiant-email-panel-scroll-bar'><label>{St}</label><Link href="" className='delete-student-touchable'>Supprimer</Link> </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
                <button className="valid-button-add-quiz-cn">Valider</button>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
    
}