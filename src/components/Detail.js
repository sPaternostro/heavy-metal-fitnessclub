import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (

    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
      }} >

      <img src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image" />

      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' }
        }} >

        <Typography
          variant='h3'
          fontFamily='Noto serif ahom'
          color='#FF2625'
          sx={{
            fontSize: { lg: '64px', xs: '30px' },
            textAlign: { lg: 'start', xs: 'center' }
          }}
          fontWeight={700}
          textTransform="capitalize">
          <b><u>{name}</u></b>
        </Typography>

        <Typography
          variant='h6'
          fontFamily='Noto serif ahom'
          fontSize='1.5rem'
          color="#4F4C4C">
          Exercises keep you strong. <br />
          <i><b>{name}</b> is one of the best exercises to target your <b>{target}</b></i>.<br />
          It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (

          <Stack key={item.name}
            direction="row"
            gap="24px"
            alignItems="center">

            <Button
              sx={{
                background: '#FFCCAE',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }} >

              <img src={item.icon}
                alt={bodyPart}
                style={{
                  width: '50px',
                  height: '50px'
                }} />

            </Button>

            <Typography
              variant='h5'
              textTransform="capitalize"
              fontFamily='Noto serif ahom' >
              {item.name}
            </Typography>
          </Stack>

        ))}

      </Stack>
    </Stack>
  );
};

export default Detail;
