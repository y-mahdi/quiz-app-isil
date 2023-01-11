import FooterDashboardProfessor from "./Components/FooterDashboard.Professor";
import HeaderDashboardProfessor from "./Components/HeaderDashboard.Professor";
import BodyDashboardProfessor from "./Components/BodyDashboard.Professor";
import './Style/DashboardProfessor.css';
import { useLocation } from "react-router-dom";

export default function DashboardProfessor() {
    let data=useLocation();
    return(
        <div className="container-dashboard-professor">
            {HeaderDashboardProfessor("Pr. "+data.state.nom)}
            <BodyDashboardProfessor />
            <FooterDashboardProfessor />
        </div>
    )
}