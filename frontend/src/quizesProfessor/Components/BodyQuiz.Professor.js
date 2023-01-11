import NavigationDashboardProfessor from "../../DashboardProfessor/Components/NavigationDashborad.Professor"
import AddQuizPopup from "./addQuizPopup";
import { useState,useEffect } from "react";
import GetQuizes from "../Api/getQuizes";
import DetailQuizPopup from "./detailQuizPopup";
import DeleteQuizApi from "../Api/deleteQuiz";
export default function BodyQuizProfessor() {
    const [OpenDetailPopup, setOpenDetailPopup] = useState(false);
    const [ExactQuiz, setExactQuiz] = useState();
    const closeDetailPopup=()=>{
        setOpenDetailPopup(false)
    }
    const [OpenAddQuizPopup, setOpenAddQuizPopup] = useState(false);
    const CloseAddQuizPopUp=()=>{
        setOpenAddQuizPopup(false);
    }
    const [dataquizes, setdataquizes] = useState([]);
    const [Loaded, setLoaded] = useState(false)
    useEffect(()=>{
        fetchData();
    },[Loaded])
   const fetchData=async()=>{
        let Array=[]
        Array=await GetQuizes();
        setdataquizes(Array)
        setLoaded(true);
   }
   const deleteQuiz=async(id)=>{
        await DeleteQuizApi(id);
        setLoaded(false);
   }
    return(
        <>
        <div className="body-dashboard-professor-container">
            <NavigationDashboardProfessor />
            <div className="body-dashboard-professor-container-part2">
                <div className="questions-control-panel">
                    <div>les Quizes</div>
                    <button onClick={()=>{setOpenAddQuizPopup(true)}}>Ajoute</button>
                </div>
                {
                    dataquizes.map((qz)=>{
                        return(
                            <div className="questions-control-panel-cc">
                                <div>{qz.nom}</div>
                                <button onClick={()=>{
                                    deleteQuiz(qz._id)
                                }}>Supp</button>
                                <button onClick={()=>{
                                    setExactQuiz(qz);
                                    setOpenDetailPopup(true)
                                }}>Detail</button>
                                
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
        {AddQuizPopup(OpenAddQuizPopup,CloseAddQuizPopUp)}
        {DetailQuizPopup(OpenDetailPopup,closeDetailPopup,ExactQuiz)}
        </>
    )
}