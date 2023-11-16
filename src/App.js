import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { IconContext } from 'react-icons/lib';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [board, setBoard] = useState({ title: 'My Dashboard', listData: [] });

  const saveBoardHandler = (newBoard) => setBoard(newBoard);

  return (
    <Router>
      <main>
        <IconContext.Provider value={{ style: {transform: 'translateY(2px)' }}}>
          <Sidebar isOpen={sideBarOpen} changeOpen={() => setSideBarOpen(!sideBarOpen)} />
          <Routes>
            <Route>
              <Route path="/" element={<Dashboard sideBarOpen={sideBarOpen} board={board} saveBoard={saveBoardHandler} />} />
              <Route path="/about" element={<div><h1>ABOUT US</h1></div>} />
              <Route path="/project" element={<div><h1>PROJECT</h1></div>} />
            </Route>
          </Routes>
        </IconContext.Provider>
      </main>
    </Router>
  )
}

export default App;
