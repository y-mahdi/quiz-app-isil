import NavigationDashboardProfessor from "../../DashboardProfessor/Components/NavigationDashborad.Professor"
import AddQuizPopup from "./addQuizPopup";
import { useState } from "react";
export default function BodyQuizProfessor() {
    const [OpenAddQuizPopup, setOpenAddQuizPopup] = useState(false);
    const CloseAddQuizPopUp=()=>{
        setOpenAddQuizPopup(false);
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
            </div>
            
        </div>
        {AddQuizPopup(OpenAddQuizPopup,CloseAddQuizPopUp)}
        </>
    )
}