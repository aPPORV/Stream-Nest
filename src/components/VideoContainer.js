import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (videos.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
       <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video} /> </Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
