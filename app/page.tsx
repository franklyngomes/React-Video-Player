"use client";
import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import FileUploader from "@/components/FIleUploader";
import VideoList from "@/components/VideoList";

  export default function Home() {
  const [videos, setVideos] = useState<{ name: string; url: string }[]>([]);
  const [isGridView, setIsGridView] = useState(true);

  const handleFileUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setVideos((prevVideos) => [...prevVideos, { name: file.name, url }]);
  };

  const handleNameChange = (index: number, newName: string) => {
    const updatedVideos = [...videos];
    updatedVideos[index].name = newName;
    setVideos(updatedVideos);
  };
  return (
       <Container sx={{ paddingTop: "20px" }}>
      <FileUploader onFileUpload={handleFileUpload} />
      <Button variant="contained" onClick={() => setIsGridView(!isGridView)} style={{ backgroundColor: "white",
          color: "black",
          borderRadius: "30px",
          padding: "5px",
          width: "120px",
          marginTop: "20px",
          marginBottom: "20px",
          textTransform: "capitalize" }}>
         {isGridView ? 'Table View' : 'Grid View'}
      </Button>
      <VideoList
        videos={videos}
        onNameChange={handleNameChange}
        isGridView={isGridView}
      />
    </Container>
  );
};
