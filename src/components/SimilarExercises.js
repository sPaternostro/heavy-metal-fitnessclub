import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (

  <Box
    sx={{
      mt: { lg: '100px', xs: '0px' }
    }}
    p='20px' >

    <Typography
      variant='h3'
      mb={7}
      // sx={{
      //   fontSize: { lg: '44px', xs: '25px' },
      //   ml: '20px',
      // }}
    // fontWeight={700}
    // color="#000"
    // mb="33px"
    > Exercises that target the <i>same <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>muscle group</span></i>
    </Typography>

    <Stack
      direction="row"
      sx={{
        p: 2,
        position: 'relative',
      }} >
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    <Typography
      // sx={{
      //   fontSize: { lg: '44px', xs: '25px' },
      //   ml: '20px',
      //   mt: { lg: '100px', xs: '60px' }
      // }}
      // fontWeight={700}
      // color="#000"
      // mb="33px"
      mb={7}
      mt={7}
      variant='h3' 
      > Exercises that use the <i>same <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span></i>
    </Typography>

    <Stack
      direction="row"
      sx={{
        p: 2,
        position: 'relative'
      }} >
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
