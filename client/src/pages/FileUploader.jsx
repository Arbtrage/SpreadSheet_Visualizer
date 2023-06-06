import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const FileUploader = ({ handleResponseData }) => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:3000/upload', formData)
      .then((response) => {
        handleResponseData(response.data);
        setFile(null);

        // Navigate to the visualize page
        navigate('/visualize');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        // Handle the error if needed
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='upload'>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Drag and drop a file here, or click to select a file</p>
      </div>
      {file && (
        <div>
          <p>Selected file: {file.name}</p>
          <button onClick={uploadFile}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
