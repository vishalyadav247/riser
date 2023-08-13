import React from 'react';
import HomeBanner from '../components/HomeBanner';
import SingleHeading from '../components/SingleHeading';
import OurServices from '../components/OurServices';
import AboutUs from '../components/AboutUs';
import TopSkills from '../components/TopSkills';
import RecentProjects from '../components/RecentProjects';
import RecentBlogs from '../components/RecentBlogs';


export default function Home(props) {
    const { data, categories } = props;

    return (
        <>
            <HomeBanner
                title='I build things for the web'
                content='I am Self-motivated & results oriented professional MBA (IT) 
                graduate and a passionate Web Developer with hands-on experience
                & practice in Web Application Development.'/>

            <SingleHeading
                title="Web Development Services"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='EXPLORE' 
                style={{padding:'0px 20px'}} />

            <OurServices />

            <SingleHeading
                title=" About Us"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='KNOW' />

            <AboutUs />

            <SingleHeading
                title=" Top Skills"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='EXPERTISE' />

            <TopSkills />         
            
            <RecentProjects />

            <SingleHeading
                title=" Our Recent Blogs"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='READ' />

            <RecentBlogs data={data} categories={categories} />
        </>
    )
}
