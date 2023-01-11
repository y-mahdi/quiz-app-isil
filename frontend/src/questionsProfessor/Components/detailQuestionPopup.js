


export default function DetailQuestion(open,closeFunc,question) {
    if (open) {
        return(
            <div className="detail-popup-container">
                <div className="detail-popup-text">Detail de Question</div>
                <div className="detail-info-text">
                    <label>Question:</label>{question.question}
                </div>
                <div className="detail-info-text">
                    <label>Type:</label>{question.type}
                </div>
                <div className="detail-info-text">
                    <label>Difficulté:</label>{question.difficulte}
                </div>
                <div className="detail-info-text">
                    <label>Bonnes Reponses</label><br/>
                    {/* <label>Reponse{1}:</label> la Reponse */}
                    {
                        question.bonnereponse.map((rs,i)=>{
                            return <><label>Reponse{i+1}:</label>{rs}<br/></>
                        })
                    }
                </div>
                <div className="detail-info-text">
                    <label>Bonnes Erronnee</label><br/>
                    {
                        question.reponseerronne.map((rs,i)=>{
                            return <><label>Reponse{i+1}:</label>{rs}<br/></>
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