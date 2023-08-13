import React from 'react';
import ShopifyImg from '../images/shopify.jpg';
import { Typography, Box, Button } from '@mui/material';

export default function RecentProjects() {

    const AboutShopifyCss = {
        maxWidth:'1000px',
        margin:'auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        padding: { xs: "40px 20px 70px 20px", md: "100px 40px", lg: "70px 40px" }
    }
    const TitleCss = {
        fontSize: { xs: '28px', md: '35px' },
        fontFamily: 'poppins',
        fontWeight: '700',
        color: '#000000',
        lineHeight: '0.9',
        margin: { xs: '30px 0px', md: '0px 0px 30px 0px' }
    }
    const ContentCss = {
        textAlign: 'justify',
        fontSize: '17px',
        fontFamily: 'open sans',
        color: '#7a7a7a',
        marginBottom: '30px',
        fontWeight: '300',
        lineHeight: '1.8'
    }


    return (
        <>
            <Box sx={{ backgroundColor: '#ffff' }}>
                <Box sx={AboutShopifyCss}>
                    <Box sx={{}} className="aboutShopify">
                        <img src={ShopifyImg} alt='About Shopify' style={{ width: '70%', height: 'auto', borderRadius: '50%', border: '1px solid #58b79a' }} />
                    </Box>
                    <Box sx={{ padding: { md: '0px 60px 0px 0px', lg: '0px 60px 0px 83px' },display:'flex',justifyContent:'center',flexDirection:'column' }}>
                        <Typography sx={TitleCss}>What We Do</Typography>
                        <Typography sx={ContentCss}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                        <Button variant="contained" sx={{ maxWidth:'200px',borderRadius: '25px', marginTop: '10px', height: '40px', fontSize: '14px' }}>Recent Project</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
