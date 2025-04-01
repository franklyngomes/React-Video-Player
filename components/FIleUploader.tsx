"use client"
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Typography } from '@mui/material';

const FileUploader: React.FC<{ onFileUpload: (file: File) => void }> = ({ onFileUpload }) => {
   // Function to validate if the file is a video type
   const fileValidator = (file: File) => {
    const validVideoTypes = ['video/mp4', 'video/webm', 'video/avi'];
    if (!validVideoTypes.includes(file.type)) {
      alert('Only video files are allowed!'); // Optionally show a message
      return false; // Reject the file
    }
    return true; // Accept the file
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['video/mp4', 'video/webm', 'video/avi'] as const, // Only accept video files
    onDrop: (acceptedFiles) => {
      // Filter files and reject invalid ones
      const validFiles = acceptedFiles.filter(fileValidator);

      // Call the onFileUpload callback with valid files
      validFiles.forEach((file) => onFileUpload(file));
    },
  });

  return (
    <div {...getRootProps()} style={{padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <Typography variant="h6">Drag & Drop your video files here, or click to select</Typography>
      <Button variant="contained"  sx={{color: "black",
          borderRadius: "30px",
          padding: "8px",
          marginTop: "20px",
          marginBottom: "20px",
          background: "white",
          textTransform: "capitalize"}}>Choose Files</Button>
    </div>
  );
};

export default FileUploader;
