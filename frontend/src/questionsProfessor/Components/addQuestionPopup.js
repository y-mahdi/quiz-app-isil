import closeIcon from '../../Icons/close.svg';
import { useState} from 'react';

export default function AddQuestionPopup(Open,closefunct) {
   


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
    if(Open){
        return(
            <div className="add-questions-popup-container">
                <div className='title-question-panel'>
                    <div className='add-question-title-text'>Ajoute une Question</div>
                    <button onClick={closefunct}><img src={closeIcon} width="40px" alt='close icon '/></button>

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
                        <button>Enregistrer</button>
                    </div>
                </div>
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