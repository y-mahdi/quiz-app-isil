import closeIcon from '../../Icons/close.svg';
import { useEffect, useState} from 'react';
import AddQuestion from '../Api/AddQuestion';
export default function AddQuestionPopup(Open,closefunct) {
    
    const SuccesMessage=(variable)=>{
        if (variable) {
            return(
                <div className='added-message-text-buttom-center'>Added succesfully</div>
            )
        } else {
            return(
                <></>
            )
        }

    }
    const ResetVariables=()=>{
        setAddedToDB(false)
        setBonneReponse([])
        setReponseErronnees([])
        setReponseErronneeExact("")
        setBonneReponseExact("")
        setDiffculte("")
        setQuestion("")
        setTypequestion("")
    }
    const [AddedToDB, setAddedToDB] = useState(false)
    const [Question, setQuestion] = useState("");
    const [typequestion, setTypequestion] = useState("");
    const [diffculte, setDiffculte] = useState("");
    const [bonneReponse, setBonneReponse] = useState([]);
    const [ReponseErronnees, setReponseErronnees] = useState([])
    const [bonneReponseExact, setBonneReponseExact] = useState("");
    const [ReponseErronneeExact, setReponseErronneeExact] = useState("")
   
    const addToBonneReponse=()=>{
        setBonneReponse(bonneReponse=>[...bonneReponse,bonneReponseExact]);
        
    }
    const addToReponseErronnee=()=>{
        
        setReponseErronnees(ReponseErronnees=>[...ReponseErronnees,ReponseErronneeExact]);
    }
    const SendQuestion=async()=>{
        if(ReponseErronnees.length==0 || bonneReponse.length==0 || Question=='' || typequestion=='' || diffculte==''){
            alert('incomplete data')
        }
        else{
            try {
                await AddQuestion(Question,typequestion,diffculte,bonneReponse,ReponseErronnees);
                await setAddedToDB(true);
                ResetVariables()
            } catch (error) {
                setAddedToDB(false)
        }   
        
            
        }
        
    }
    useEffect(()=>{

    },[AddedToDB])
    if(Open){
        return(
            <div className="add-questions-popup-container">
                <div className='title-question-panel'>
                    <div className='add-question-title-text'>Ajoute une Question</div>
                    <button onClick={()=>{
                        closefunct();
                        ResetVariables();
                    }}><img src={closeIcon} width="40px" alt='close icon '/></button>

                </div>
                <div className='form-question-container'>
                    <div className='form-question-container-part1'>
                        <input value={Question} placeholder='Question' onChange={(text)=>setQuestion(text.target.value)} /><br/>
                        <select onChange={(text)=>setTypequestion(text.target.value)}>
                            <option value={'multichoix'}>Multichoix</option>
                            <option value={'unique'}>Choix unique</option>
                            <option value={'vraifaux'}>Vrais ou faux</option>
                        </select><br/>
                        <select onChange={(text)=>setDiffculte(text.target.value)}>
                            <option value={'facile'}>Facile</option>
                            <option value={'moyenne'}>Moyenne</option>
                            <option value={'difficile'}>Difficile</option>
                        </select><br/>
                        <input placeholder='une Bonne Réponse' value={bonneReponseExact} onChange={(text)=>setBonneReponseExact(text.target.value)}/><br/>
                        <button onClick={()=>addToBonneReponse()}>Ajoute</button><br/>
                        <input placeholder='une Réponse erronées' value={ReponseErronneeExact} onChange={(text)=>setReponseErronneeExact(text.target.value)} /><br/>
                        <button onClick={()=>addToReponseErronnee()}>Ajoute</button><br/>
                    </div>
                    <div className='form-question-container-part2'>
                        <div className='bonne-reponse-title'>les Bonnes Réponses</div> 
                        <div className='scrollbar-reponseerronee'>
                            {
                                bonneReponse.map((rep)=>{
                                    return(
                                        <div className='reponse-panel-text'>{rep}</div>
                                    )
                                })
                            }
                        </div>
                        <div className='bonne-reponse-title'>les Bonnes Erronées</div> 
                        <div className='scrollbar-reponseerronee'>
                            {
                                ReponseErronnees.map((rep)=>{
                                    return(
                                        <div className='reponse-panel-text'>{rep}</div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={()=>SendQuestion()}>Enregistrer</button>
                    </div>
                </div>
                {SuccesMessage(AddedToDB)}
            </div>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}