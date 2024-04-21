import { useState } from "react";
import AdminDevise from "../components/AdminDevise";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import DeviseSection from "../components/DeviseSection";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("sectionDevise");

  const handleActivateSection = (currentSection) => {
    setActiveSection(currentSection);
  };
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar onClickItem={handleActivateSection} />
      {activeSection === "sectionDevise" && <DeviseSection />}
      {activeSection === "sectionCours" && <AdminDevise />}
    </>
  );
}

export default Dashboard;
