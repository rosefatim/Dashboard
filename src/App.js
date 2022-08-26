import './App.css';
import Home from './components/tabs/Home';
import Login from './components/tabs/Login';
import Error from './components/tabs/Error';
import User from './components/tabs/User';
import Chart from './components/tabs/Chart';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="chart" element={<Chart />} />
          <Route  path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
