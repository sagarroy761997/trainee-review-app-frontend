
import Login from './components/pages/Login';
import dataContext from './context/dataContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Report from './components/Report';
function App() {
  const [apiData, setApiData] = useState({});
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);


  return (
    <dataContext.Provider value={{apiData, setApiData, open, setOpen }}>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path = "/table" element={<Landing/>}/>
        <Route path = "/form" element={<Report/>}/>
      </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
