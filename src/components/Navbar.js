import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (

  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: { lg: 'flex-start', xs: 'space-between' }
    }}
    px="20px"
    maxWidth='100%' >

    <Link to="/" >

      <img
        src={Logo}
        alt="logo"
        style={{
          width: '50px',
          height: '50px',
          margin: '0px 20px'
        }} />

    </Link>

    <Stack
      direction="row"
      gap="40px"
      fontSize="25px"
      alignItems="flex-end"
      fontFamily='Noto serif ahom'
      justifyContent='center'
      textAlign='center'
    >
      <Link to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
          alignItems: 'center',
          justifyContent: 'center'
        }} >Home</Link>

      <a href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
          alignItems: 'center',
          justifyContent: 'center'
        }} >Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
