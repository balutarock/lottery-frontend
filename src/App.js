import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
