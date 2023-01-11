import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostTentativeStudent from "../api/postTentativesStudents";


export default function BodyQuizStudent(quiz) {
    let Navigate=useNavigate();
    // const [QuizExact, setQuizExact] = useState()
    const [Counter, setCounter] = useState(0);
    const [Listesdestentaives, setListesdestentaives] = useState([]);
    const [ExactQuestions, setExactQuestions] = useState();
    // const [Answers, setAnswers] = useState(quiz.quetions[0].bonnereponse+quiz.quetions[0].reponseerronne)
    const [TotalNotes, setTotalNotes] = useState(0)
    const [SelectedAnswersExactQuestion, setSelectedAnswersExactQuestion] = useState([])
    
    useEffect(()=>{
        
            // setAnswers(quiz.quetions[Counter].bonnereponse+quiz.quetions[Counter].reponseerronne)
        
        
    },[Counter])
    const selectedAnswers=(ans)=>{
        setSelectedAnswersExactQuestion(SelectedAnswersExactQuestion=>[...SelectedAnswersExactQuestion,ans]);
    }
    const deselectAnswers=(ansr)=>{
        let array=[]
        SelectedAnswersExactQuestion.map((ans)=>{
            if(ansr==ans){

            }
            else{
                array.push(ans)
            }
        })
        setSelectedAnswersExactQuestion(array)
    }
    const NextQuestion=()=>{
        let note=0;
        let fausse=0;
        let bonnes=0;
        SelectedAnswersExactQuestion.map((ans)=>{
            if(quiz.quetions[Counter].reponseerronne.includes(ans)){
                fausse+=1;
            }
            else if(quiz.quetions[Counter].bonnereponse.includes(ans)){
                bonnes+=1;
            }
        })
        if(fausse>0 ){
            note=0;
            setListesdestentaives(Listesdestentaives=>[Listesdestentaives,{
            questionid:quiz.quetions[0]._id,
                note:note,
                selected:SelectedAnswersExactQuestion
            }])
        }
        else if(bonnes>0){
            note=bonnes/(quiz.quetions[Counter].bonnereponse.length)
            setTotalNotes(TotalNotes+note)
            setListesdestentaives(Listesdestentaives=>[Listesdestentaives,{
                questionid:quiz.quetions[0]._id,
                    note:note,
                    selected:SelectedAnswersExactQuestion
                }])
        }
        if(quiz.quetions.length>(Counter)){
            setCounter(Counter+1);
        }
        setSelectedAnswersExactQuestion([]);
        
        
    }
    const postTentatives=async()=>{
        try {
            await PostTentativeStudent(quiz._id,"ahmed@uni.edu",Listesdestentaives);
        } catch (error) {
            console.log(error)
        }
    }
    const ButtonNextPanel=()=>{
        if(quiz.quetions.length>(Counter+1)){
            return(<div className="questions-control-panel-cc">
                        <div></div>
                        <button onClick={()=>{NextQuestion()}}>Suivant</button>
            </div>)
        }
        else{
            postTentatives()
            return(
            <div className="questions-control-panel-cc">
                        <div>Votre Note Final est : {TotalNotes}</div>
                        <button onClick={()=>{Navigate("/Student/Dashboard")}}>Finir</button>
            </div>)
        }
    }
    return(
        <div className="body-dashboard-professor-container">
            <div className="questions-container-student">
                <div className="questions-control-panel-cc">
                        <div>{quiz.quetions[0].question}</div>
                        
                </div>
                {
                    quiz.quetions[Counter].reponseerronne.map((ans,i)=>{
                        if(SelectedAnswersExactQuestion.includes(ans)){
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{ans}</div>
                                    <button onClick={()=>{
                                        deselectAnswers(ans)
                                    }}>DeSel</button>
                                </div>)
                        }
                        else{
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{ans}</div>
                                    <button onClick={()=>{
                                        selectedAnswers(ans)
                                    }}>Select</button>
                                </div>)
                        }
                    })
                }
                {
                    quiz.quetions[Counter].bonnereponse.map((ans,i)=>{
                        if(SelectedAnswersExactQuestion.includes(ans)){
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{ans}</div>
                                    <button onClick={()=>{
                                        deselectAnswers(ans)
                                    }}>DeSel</button>
                                </div>)
                        }
                        else{
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{ans}</div>
                                    <button onClick={()=>{
                                        selectedAnswers(ans)
                                    }}>Select</button>
                                </div>)
                        }
                        
                    })
                }
                {ButtonNextPanel()}
            </div>
        </div>
    )
}