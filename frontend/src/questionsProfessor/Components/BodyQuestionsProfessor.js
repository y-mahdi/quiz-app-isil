import NavigationDashboardProfessor from "../../DashboardProfessor/Components/NavigationDashborad.Professor";
import AddQuestionPopup from "./addQuestionPopup";
import { useState } from "react";

export default function BodyQuestionsProfessor() {
    const [open, setOpen] = useState(true)
    function closeAdd(){
        setOpen(false)
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
            </div>
            
        </div>
        {AddQuestionPopup(open,closeAdd)}
        </>
    )
}