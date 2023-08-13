import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Image11 from '../images/weare.jpg'
import { Button, Typography } from '@mui/material';

export default function AboutUs() {
   
    const leftContentWrapper = {
        
        padding: { xs: "0px 15px 30px 20px", md: "0px 40px 30px 50px" },
        marginTop: { xs: "-25px", md: "-7px" },
        marginBottom: { xs: "30px" }
    }
    const leftContent = {
        paddingTop: { xs: "20px", md: "0px" },
        fontSize: { xs: "18px", sm: "16px", md: "22px" },
        lineHeight: "1.4em",
        fontFamily: "poppins",
        fontWeight: "700",
        color: "#ffffff",
        marginTop: "-20px",
        
    }
    const ReadBtn = {
        position:"relative",
        top:{xs:"-5px",sm:"-15px"},
        left:{xs:"12px",sm:"117px"},
        display:{xs:"block",md:"none"},
        textTransform:'capitalize',
        color:"#f5881f",
        fontSize:"17px",
        fontWeight:"300",
        fontFamily:"open sans"
    }

    const [btnText,setBtnText]= useState('Read More')
    const[addCss,setAddCss] = useState({
        height:{xs:'275px',sm:'260px',md:"fit-content"},
        overflow:"hidden"
    })

    const ReadMoreLess=()=>{
        if(btnText === "Read More") {
            ReadMore()
            setBtnText('Read Less')
        }
        else{
            ReadLess()
        setBtnText('Read More')
        }
    }
    const ReadMore=()=>{
        setAddCss((obj)=>{
            return ({...obj,height:"fit-content",overflow:"visible"})
        })  
    }
    const ReadLess=()=>{
        setAddCss((obj)=>{
            return ({...obj,height:{xs:'275px',sm:'260px'},overflow:"hidden"})
        })
    }

    const weAreWrapper = {
        display: 'grid',
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        backgroundColor: "#f8f8f8"
    }
    const weAreContent = {
        padding: { xs: "50px 20px", sm: "56px 40px 55px 40px", md: "60px", lg: "75px" },
        lineHeight: "1.8em",
        fontFamily: "open sans",
        fontSize: "17px",
        color: "#7a7a7a",
        fontWeight: "300",
        height:addCss.height,
        overflow:addCss.overflow
    }
   
    return (
        <Box className="weAreWrapper siteWidth" sx={weAreWrapper}>
            <Box className="weAreLeft" >
                <img src={Image11} alt="images" style={{filter:'brightness(0.5)'}}/>
                <Box sx={leftContentWrapper} className="leftContent">
                    <Typography sx={leftContent}>
                        We help you drive revenue by leveraging digital marketing channels.
                        Every business is different and hence getting a positive ROI from a
                        digital marketing channel may differ from business to business.
                    </Typography>
                </Box>
            </Box>
            <Box className="weAreRight" sx={{paddingBottom:{xs:'60px',md:'0px'}}}>
                <Typography sx={weAreContent} id="weAreContent">
                My Name is <strong>VISHAL YADAV.</strong><br></br>
                I'm Self-motivated & results oriented professional MBA (IT) graduate 
                and a passionate Web Developer intern with hands-on experience & practice 
                in Dynamic & Single Page Application (SPA) Designs and Development. I have 
                developed Fully Responsive Web Applications compatible with multiple screens.
                <br></br><br></br>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
                </Typography>
                <Button sx={ReadBtn} onClick={ReadMoreLess}>{btnText}</Button>
            </Box>
        </Box>
    )
}


