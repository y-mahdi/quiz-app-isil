import { useState } from "react";
import './Style/EtudiantDashboard.css';
import HeaderDashboardProfessor from "../DashboardProfessor/Components/HeaderDashboard.Professor";
import FooterDashboardProfessor from "../DashboardProfessor/Components/FooterDashboard.Professor";
import BodyDashbardEtudiant from "./Components/BodyDashboard.Etudiant";
export default function EtudiantDashboard() {
    return(
        <div className="container-dashboard-student">
            {HeaderDashboardProfessor("Espace Etudiant")}
            <BodyDashbardEtudiant />
            <FooterDashboardProfessor />
        </div>
    )
}