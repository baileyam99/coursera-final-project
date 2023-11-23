import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { IconContext } from 'react-icons/lib';
import { Sidebar, SidebarMobile } from './components/Sidebar/Sidebar';
import { About } from './pages/About/About';
import { Project } from './pages/Project/Project';
import { AlertStack } from './components/Alerts/AlertStack';
import './App.scss';

// Define alternate screen sizes
const screens = {
  small: window.matchMedia("all and (max-device-width: 640px)").matches,
  tablet: window.matchMedia("all and (min-device-width: 641px) and (max-device-width: 1024px)").matches,
};

// Main app
function App() {
  // Intialize state variables
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [board, setBoard] = useState({ title: 'My Dashboard', listData: [] });
  const [alerts, setAlerts] = useState([]);

  // Function to handle saving board into state
  const saveBoardHandler = (newBoard) => {
    setBoard(newBoard);
  };

  // Function to handle new alert messages
  const newAlertHandler = (newAlert) => {
    const alertList = [...alerts];
    alertList.push(newAlert);
    setAlerts(alertList);
  }

  // Function to handle closing alert messages
  const closeAlertHandler = (id) => {
    const alertList = [...alerts];
    for (let i = 0; i < alertList.length; i++) {
        if (alertList[i].id === id) {
          alertList.splice(i, 1); 
        }
    }
    setAlerts(alertList);
  }

  return (
    <Router>
      <main>
        <IconContext.Provider value={{className: 'translator'}}>
          {
            screens.small 
            ? <SidebarMobile /> 
            : <Sidebar isOpen={sideBarOpen} changeOpen={() => setSideBarOpen(!sideBarOpen)} />
          }
          <Routes>
            <Route>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    sideBarOpen={sideBarOpen} 
                    board={board} 
                    saveBoard={saveBoardHandler} 
                    alert={newAlertHandler}
                  />
                }
              />
              <Route path="/about" element={<About isOpen={sideBarOpen} alert={newAlertHandler} />} />
              <Route path="/project" element={<Project isOpen={sideBarOpen} />} />
            </Route>
          </Routes>
          <AlertStack alerts={alerts} close={closeAlertHandler} />
        </IconContext.Provider>
      </main>
    </Router>
  );
};

export default App;
