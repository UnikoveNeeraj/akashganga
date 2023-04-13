import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import { Header1 } from "../Homepage/Header1";
import MainContent from "../Homepage/MainContent";
import DashboardLayout from "../../layout/dashboard";
const DashboardHome = () => {
  return (
    <DashboardLayout>
      <MainContent />
    </DashboardLayout>
  );
};

export default DashboardHome;
