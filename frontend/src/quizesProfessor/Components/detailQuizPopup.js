


export default function DetailQuizPopup(open,closeFunc,quiz) {
    if (open) {
        return(
            <div className="detail-popup-container">
                <div className="detail-popup-text">Detail de quiz</div>
                <div className="detail-info-text">
                    <label>Question:</label>{quiz.nom}
                </div>
                {/* <div className="detail-info-text">
                    <label>Type:</label>{question.type}
                </div> */}
                <div className="detail-info-text">
                    <label>Date de demmarage:</label>{quiz.datedemmarage}
                </div>
                <div className="detail-info-text">
                    <label>Date d'arret:</label>{quiz.datearret}
                </div>
                <div className="detail-info-text">
                    <label>listes des etudiants</label><br/>
                    {/* <label>Reponse{1}:</label> la Reponse */}
                    {
                        quiz.listesetudiant.map((rs,i)=>{
                            return <><label>Email{i+1}:</label>{rs}<br/></>
                        })
                    }
                </div>
                <div className="detail-info-text">
                    <label>les questions</label><br/>
                    {
                        quiz.quetions.map((rs,i)=>{
                            return <><label>Question{i+1}:</label>{rs.question}<br/></>
                        })
                    }
                </div>
                <button onClick={closeFunc} className="button-close-popup">x</button>
            </div>
        )
    } else {
        return(
            <></>
        )
    }
}