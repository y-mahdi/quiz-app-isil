import closeIcon from '../../Icons/close.svg';


export default function AddQuizPopup(open,closeFunc) {
    if (open) {
        return(
            <div className="addQuiz-popup-container">
                <button className='close-button-top-right' onClick={closeFunc}><img src={closeIcon} width="40px" alt='close icon '/></button>
                <div className="quiz-popup-title">Ajoute un Quiz</div>
                <div className="df-form-addquiz">
                    <div className="df-form-addquiz-part1">
                        <div className="input-label">Nom du Quiz</div>
                        <input placeholder="le Nom du Quiz" />
                        <div className="input-label">date de démarrage</div>
                        <input type={'datetime-local'}  />
                        <div className="input-label">date d’arrêt</div>
                        <input type={'datetime-local'}  />
                        <div className="input-label">Nombre des Tentatives</div>
                        <input type={'number'} placeholder='Nombre de Tentative'/>
                        <div className="input-label">l'Additions des Etudiants</div>
                        <input type={'email'} placeholder="L'email d'Etudiant" /><br/>
                        <button>Ajoute</button>
                    </div>
                    <div className="df-form-addquiz-part2">
                        <div className="input-label">Selectionner les questions</div>
                        <div className="scroll-bar-question-container">

                        </div>
                        <div className="input-label">La Liste des Etudiants</div>
                        <div className="scroll-bar-students-container">

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