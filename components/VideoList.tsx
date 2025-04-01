"use client"
import React from 'react';
import {Table, TableBody, TableCell, TableContainer,TableRow, Paper } from '@mui/material';
import VideoCard from './VideoCard';
import Grid from '@mui/material/Grid';

interface VideoListProps {
  videos: { name: string, url: string }[];
  onNameChange: (index: number, newName: string) => void;
  isGridView: boolean;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onNameChange, isGridView }) => {
  return isGridView ? (
    <Grid container spacing={2} color="dark">
      {videos.length !== 0 ? videos.map((video, index) => (
        <Grid size={{ xs: 12, sm: 6,  md: 4 }} key={index}>
          <VideoCard video={video} onNameChange={(newName) => onNameChange(index, newName)} />
        </Grid>
      )) : "No videos uploaded"}
    </Grid>
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{backgroundColor: "transparent", color: "white"}}>
        <TableBody>
          {videos.length !== 0 ? videos.map((video, index) => (
            <TableRow key={index}>
              <TableCell>
                <VideoCard video={video} onNameChange={(newName) => onNameChange(index, newName)} />
              </TableCell>
              <TableCell>{video.name}</TableCell>
            </TableRow>
          )) : "No videos uploaded"}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VideoList;
