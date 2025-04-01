"use client"
import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import VideoPlayer from "./VideoPlayer";
import { Typography } from "@mui/material";
import {Box} from "@mui/material";

interface VideoCardProps {
  video: { name: string; url: string };
  onNameChange: (newName: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(video.name);

  const handleNameChange = () => {
    onNameChange(newName);
    setIsEditing(false);
  };

  return (
    <Card>
      <CardMedia component="div">
        <VideoPlayer url={video.url} />
      </CardMedia>
      <CardContent>
        {isEditing ? (
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleNameChange}
            autoFocus
            variant="standard"
          />
        ) : (
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="caption">{video.name}</Typography>
            <IconButton onClick={() => setIsEditing(true)} size="small" sx={{color: "black"}}>
              <Edit />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
