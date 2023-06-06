import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css'
import FileUploader from './pages/FileUploader'
import VisualizeData from './pages/Visualize'

function App() {
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    setResponseData(data);
  };
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<FileUploader handleResponseData={handleResponseData}/>} />
        <Route path="/visualize" element={<VisualizeData data={responseData}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
