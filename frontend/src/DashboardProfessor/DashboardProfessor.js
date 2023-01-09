import FooterDashboardProfessor from "./Components/FooterDashboard.Professor";
import HeaderDashboardProfessor from "./Components/HeaderDashboard.Professor";
import BodyDashboardProfessor from "./Components/BodyDashboard.Professor";
import './Style/DashboardProfessor.css';

export default function DashboardProfessor() {
    return(
        <div className="container-dashboard-professor">
            {HeaderDashboardProfessor("Dashboard")}
            <BodyDashboardProfessor />
            <FooterDashboardProfessor />
        </div>
    )
}