import React from 'react';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';

export default function SkillCard(props) {
  const imageCss={
    width: "100%", 
    height: "100%",
    transition:'all 0.3s linear',
    display: 'table-header-group',
    padding:'50px'
  }
  const titleCss={
    fontSize:'22px',
    fontFamily:'poppins',
    fontWeight:'700',
    color:'#00438b'
  }
  const desinationCss={
    fontSize:'16px',
    fontFamily:'poppins',
    fontWeight:'400',
    color:'#00438b'
  }
  const descriptionCss={
    fontSize:'17px',
    fontFamily:'open sans',
    fontWeight:'300',
    color:'#7a7a7a',
    marginTop:'20px',
    lineHeight:'1.7'
  }
  const ImageWrapper={
    overflow:'hidden',
    border:'1px solid #dde3ee',
    margin:'0px 24px'
  }
  
  return (
    <Box sx={{width:'280px'}}>
      <Box className='teamCardImage' sx={ImageWrapper}>
        <img src={props.image} style={imageCss} alt="Team Member" className='teamImage'></img>
      </Box>
      <Box className='teamCardContent' sx={{textAlign:'center',marginTop:'20px'}}>
        <Typography sx={titleCss}>{props.name}</Typography>
        <Typography sx={desinationCss}>{props.desination}</Typography>
        <Typography sx={descriptionCss}>{props.description}</Typography>
      </Box>
    </Box>
  )
}
