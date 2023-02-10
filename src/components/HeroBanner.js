import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (

  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
      display: { lg: 'flex', xs: 'flex' },
      flexDirection: { lg: 'column', xs: 'column' },
      justifyContent: { lg: 'center', xs: 'center' },
      alignItems: { lg: 'flex-start', xs: 'center' },
      flexWrap: { lg: 'none', xs: 'wrap' }
    }}
    position="relative"
    p="20px"
    maxWidth='100%' >

    <Typography
      color="#FF2625"
      fontWeight="600"
      fontFamily='Noto serif ahom'
      sx={{
        fontSize: { lg: '50px', xs: '40px' },
        paddingBottom: { lg: '40px', xs: '20px' }
      }} >
      <u>Heavy Metal Fitness Club</u>
    </Typography>

    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '40px' }
      }}
      mb="23px"
      mt="30px">
      Sweat, Smile <br />
      and Repeat !
    </Typography>

    <Typography
      fontSize="22px"
      fontFamily="Noto serif ahom"
      lineHeight="30px" >
      <i>Check out the most effective exercises</i>
    </Typography>

    <Stack>

      <a href="#exercises"
        style={{
          marginTop: '50px',
          textDecoration: 'none',
          width: '250px',
          height: 'auto',
          textAlign: 'center',
          background: '#FF2625',
          padding: '15px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '25px',
          fontFamily: 'Noto serif ahom'
        }}
        fontFamily={'Noto serif ahom'} > Explore Exercises</a>
    </Stack>

    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px'
      }} > Exercise
    </Typography>

    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
