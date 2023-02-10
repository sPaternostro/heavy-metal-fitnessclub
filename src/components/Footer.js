import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (

  <Box
    mt="80px"
    bgcolor="#FFF3F4" >

    <Stack
      gap="40px"
      alignItems='center'
      px="40px"
      pt="24px"
      sx={{
        display: { lg: 'flex', xs: 'flex' },
        flexDirection: { lg: 'row', xs: 'row' },
        justifyContent: { lg: 'center', xs: 'space-evenly' }
      }} >

      <img
        src={Logo}
        alt="logo"
        width='60px'
        height='auto'
        paddingRight='0'
        marginRight='0'
        borderRadius='50%' />



      <Typography
        fontFamily='Noto serif ahom'
        fontWeight='bold'
        marginLeft='0' paddingLeft='0'
      >
        Heavy Metal <br /> Fitness Club
      </Typography>

      <Typography
        variant='h6' pb='40px' mt='20px' >
        Made with ❤️ <br /> by
        <a href='https://github.com/sPaternostro'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            textDecoration: 'none',
            color: '#FF2625',
            paddingLeft: '5px',
            cursor: 'pointer',
            fontFamily: 'Noto serif ahom',
            fontWeight: 'bold'

          }}
        > Sebastian Paternostro </a>

      </Typography>
    </Stack>

  </Box>
);

export default Footer;
