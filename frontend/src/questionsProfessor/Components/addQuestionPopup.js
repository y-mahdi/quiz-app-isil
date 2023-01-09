import closeIcon from '../../Icons/close.svg';


export default function AddQuestionPopup(Open,closefunct) {
    if(Open){
        return(
            <div className="add-questions-popup-container">
                <div className='title-question-panel'>
                    <div className='add-question-title-text'>Add an Question</div>
                    <button onClick={closefunct}><img src={closeIcon} width="40px" alt='close icon '/></button>

                </div>
                <div className='form-question-container'>
                    
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