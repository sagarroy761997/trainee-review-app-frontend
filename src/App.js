import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import dataContext from './context/dataContext';
import Landing from './components/pages/Landing';

import Notfound from './components/pages/NotFound';

function App() {
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [traineesOfTrainer, setTraineesOfTrainer] = useState([]);
  const [traineeEditData, setTraineeEditData] = useState({});
  const [userEditData, setUserEditData] = useState({});
  const [update, setUpdate] = useState(false);
  const [message, setMessage] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false)
  return (
    <div>
      <dataContext.Provider
        value={{
          apiData, setApiData, openModal1, setOpenModal1, openModal2, setOpenModal2, openModal3, setOpenModal3, loading, setLoading, traineesOfTrainer, setTraineesOfTrainer, traineeEditData, setTraineeEditData, userEditData, setUserEditData, update, setUpdate, message, setMessage, openSnackbar, setOpenSnackbar
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<Landing />} />

            {/* <Route path="/form" element={<Report />} /> */}
            {/* <Route path="/appBar" element={<appBar />} /> */}
            <Route path="/*" element={<Notfound />} />
          </Routes>

        </BrowserRouter>
      </dataContext.Provider>
    </div>
  );
}

export default App;
