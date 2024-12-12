import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CardDetails from "./components/CardDetails";
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';
import { CardProvider } from "./context/CardContext";
import Home from "./pages/Home";
import Reservation from './components/Reservation';
import Login from './components/Login';
import Registration from './components/Regestration';

const App = () => {
  return (
    <Router>
      <CardProvider>
        <MainLayout />
      </CardProvider>
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();

  // Define routes where Navbar should NOT appear
  const noNavbarRoutes = ["/login"];

  return (
    <div dir="rtl">
      {/* Conditionally render Navbar */}
      {/* {!noNavbarRoutes.includes(location.pathname) && <Navbar />} */}

      {/* Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CardDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
