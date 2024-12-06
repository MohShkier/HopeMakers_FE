import './App.css';
import NavBar from './components/navbar/NavBar';
import AccountPageSidebar from './components/AccountPages/AccountPageSideBar';
import BottomBar from './components/BottomBar/BottomBar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProfileContent from './components/AccountPages/ProfileContent';
import SettingsPage from './components/AccountPages/settingsPage';
import SecurityPage from './components/AccountPages/SecurityPage';

const App = () => {
  const location = useLocation();

  // Sidebar visibility logic
  const showSidebar = ["/pages/profile", "/pages/settings", "/pages/security","/"].includes(
    location.pathname
  );

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen !w-full bg-blue-50">
      {showSidebar && <AccountPageSidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/profile" element={<ProfileContent/>} />
        <Route path="/pages/settings" element={<SettingsPage/>} />
        <Route path="/pages/security" element={<SecurityPage/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </div>
      <BottomBar />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
