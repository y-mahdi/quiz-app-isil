import NavigationDashboardProfessor from "../../DashboardProfessor/Components/NavigationDashborad.Professor"


export default function BodyQuizProfessor() {
    return(
        <div className="body-dashboard-professor-container">
            <NavigationDashboardProfessor />
            <div className="body-dashboard-professor-container-part2">
            <div className="questions-control-panel">
                    <div>les Quizes</div>
                    <button onClick={()=>{}}>Ajoute</button>
                </div>
            </div>
        </div>
    )
}