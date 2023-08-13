import React from 'react';
import { Box, Typography } from '@mui/material';


export default function ProjectCard(props) {
    const LinkCss = {
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: 'poppins',
        padding: '11px 30px',
        // backgroundColor: 'rgb(255, 184, 54)',
        borderRadius: '5px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        color: '#000000',
        display:'inline-block',
        marginTop:'30px',
        border:'2px solid rgb(255, 184, 54)'
    }
    const descCss={
        fontSize: '17px',
        fontFamily: 'open sans',
        fontWeight: '300',
        color: '#7a7a7a',
        lineHeight: '1.8em'
    }
    return (
        <Box className='work'>
        <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 2fr'},gridColumnGap:'50px',gridTemplateRows:'auto auto 1fr',padding:{xs:'50px 20px',md:'70px 20px'}, maxWidth: '1200px', margin: 'auto' }} >
            <Box sx={{gridArea:'1/1/2/2',height:'fit-content'}} className='logoWrapper'>
                <img src={props.logo} alt='About Shopify' style={{width:'auto',height:'auto'}}/>
            </Box>
            <Box sx={{gridArea:{xs:'3/1/4/2',md:'2/1/3/2'}}}>
                <Typography sx={descCss}>{props.desc}</Typography>
            </Box>
            <Box sx={{gridArea:{xs:'4/1/5/2',md:'3/1/4/2'}}}>
                <a href={props.siteLink} rel="noreferrer" target='_blank' style={LinkCss}>View Website</a>
            </Box>
            <Box sx={{gridArea:{xs:'2/1/3/2',md:'1/2/4/3'},margin:{xs:'25px 0px',md:'0px'}}}>
                 <img src={props.siteImage} alt='About Shopify' />
            </Box>
        </Box>
        </Box>
    )
}
