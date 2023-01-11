import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import GetQuizes from "../../quizesProfessor/Api/getQuizes";
import { useNavigate } from "react-router-dom";

export default function BodyDashbardEtudiant() {
    let Navigate=useNavigate()
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
   
   let data=useLocation();
   const lancerQuiz=(quiz)=>{
        Navigate('/Student/Quiz',{state:{quiz:quiz,user:data.state.user}})
   }
    return(
        <div className="Body-Studentdashboard-container">
            <div className="list-questions-scroll">
                <div className="questions-control-panel-cc">
                    <div><b>Etudiant:</b>{data.state.user.nom}</div>
                                    
                </div>
                    {
                        dataquizes?.map((qz)=>{
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{qz.nom}</div>
                                    
                                    <button onClick={()=>{
                                        lancerQuiz(qz);
                                    }}>Lancer</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}