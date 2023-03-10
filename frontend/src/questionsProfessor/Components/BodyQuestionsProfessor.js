import NavigationDashboardProfessor from "../../DashboardProfessor/Components/NavigationDashborad.Professor";
import AddQuestionPopup from "./addQuestionPopup";
import { useEffect, useState } from "react";
import GetQuestions from "../Api/getQuestions";
import DetailQuestion from "./detailQuestionPopup";
import DeleteQuestion from "../Api/DeleteQuestion";
export default function BodyQuestionsProfessor() {
    const [questionExact, setQuestionExact] = useState();
    const [openDetailPopup, setOpenDetailPopup] = useState(false)
    const closePopup=()=>{
        setOpenDetailPopup(false)
    }
    const [open, setOpen] = useState(false)
    function closeAdd(){
        setOpen(false)
    }
    const [dataquestions, setDataquestions] = useState([]);
    const [Loaded, setLoaded] = useState(false)
    useEffect(()=>{
        fetchData();
    },[Loaded])
   const fetchData=async()=>{
        let Array=[]
        Array=await GetQuestions();
        setDataquestions(Array)
        setLoaded(true);
   }
    return(
        <>
        <div className="body-dashboard-professor-container">
            <NavigationDashboardProfessor />
            <div className="body-dashboard-professor-container-part2">
                <div className="questions-control-panel">
                    <div>Questions</div>
                    <button onClick={()=>setOpen(true)}>Add</button>
                </div>
                <div className="list-questions-scroll">
                    {
                        dataquestions?.map((qst)=>{
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{qst.question}</div>
                                    <button onClick={()=>{
                                        DeleteQuestion(qst._id);
                                        setLoaded(false)
                                    }}>Supp</button>
                                    <button onClick={async()=>{
                                        await setQuestionExact(qst);
                                        setOpenDetailPopup(true)
                                    }}>Details</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            
        </div>
        {AddQuestionPopup(open,closeAdd)}
        {DetailQuestion(openDetailPopup,closePopup,questionExact)}
        </>
    )
}