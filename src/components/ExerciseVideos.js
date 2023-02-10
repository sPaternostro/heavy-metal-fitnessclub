import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (

    <Box
      sx={{
        marginTop: { lg: '200px', xs: '30px' }
      }}
      p="20px"
      fontFamily='Noto serif ahom' >

      <Typography
        variant='h3'
        sx={{
          fontSize: { lg: '44px', xs: '25px' }
        }}
        mb="33px" >

        Watch
        <span
          style={{
            color: '#FF2625',
            textTransform: 'capitalize'
          }} > {name}</span> exercise videos

      </Typography>

      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }} >

        {exerciseVideos?.slice(0, 3)?.map((item, index) => (

          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#D92121',
              borderRadius: '15px',
              textAlign: 'center',
              lineHeight: '20px'
            }}
          >
            <img
              style={{ borderTopRadius: '20px' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title} />

            <Box>

              <Typography
                variant='h5'
                color='#FFF'
              > {item.video.title}

              </Typography>

              <Typography
                variant='h6'
                color="#D9D9D9">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
