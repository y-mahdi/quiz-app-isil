import { useState,useEffect } from "react";
import GetQuizes from "../../quizesProfessor/Api/getQuizes";


export default function BodyDashbardEtudiant() {
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
   
    return(
        <div className="Body-Studentdashboard-container">
            <div className="list-questions-scroll">
                <div className="questions-control-panel-cc">
                    <div><b>Etudiant:</b>{" Ahmed Msassi"}</div>
                                    
                </div>
                    {
                        dataquizes?.map((qz)=>{
                            return(
                                <div className="questions-control-panel-cc">
                                    <div>{qz.nom}</div>
                                    
                                    <button>Lancer</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}