import { Box, Typography, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import moment from 'moment';

import SingleHeading from '../components/SingleHeading';
import HeaderDiv from '../components/HeaderDiv';
import bgImage from '../images/blogBg.jpg';

export default function CategoryBlogs(props) {

    const wrapperCss = {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gridGap: "30px",
        width: { xs: '100%', md: '73%' }
    }
    const itemCss = {
        overflow: "hidden !important"
    }
    const BlogTitle = {
        fontFamily: "poppins",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "22px",
        height: '45px',
        overflow: 'hidden',
    }
    const MiddleSpan = {
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        padding: "0px 5px",
        margin: "0px 5px"
    }
    const loaderCss = {
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#272bff',
        fontSize: '30px'
    }

    const categoriesLinkCss = {
        color: 'black',
        fontSize: '12px',
        fontFamily: 'open sans',
        textDecoration: 'none'
    }

    const { data, categories, popularPost } = props;
    let categoriesTiles = Object.values(categories);
    const [pageData, setPageData] = useState([])

    const { categoryName } = useParams();
    let catId = 0;
    for (let i in categories) {
        if (categories[i] === categoryName) {
            catId = i;
        }
    }

    useEffect(() => {
        const p4 = new Promise((resolve, reject) => {
            let catPostS = []
            for (let i in data) {
                let catIdArr = data[i].categories;
                for (let j in catIdArr) {
                    if (catId === `${catIdArr[j]}`) {
                        catPostS.push(data[i])
                    }
                }
            }

            resolve(catPostS)
        })
        p4.then((value) => {

            setPageData(value)
        })

    }, [data,catId])

    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <HeaderDiv />

            <SingleHeading
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='Blogs'
                bgImage={bgImage} />

            {pageData[0] ? (
                <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '50px 20px', md: '50px 30px', lg: '65px 0px' } }} >
                    <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
                        {/* left sildebar */}
                        <Box sx={{ width: { xs: '100%', md: '27%' } }} className='blogSidebar'>
                            <Box >
                                <Typography sx={{ backgroundColor: '#1a66fbd4', padding: '5px 11px 5px 11px', color: '#fff', fontSize: '16px', fontWeight: '500', fontFamily: 'poppins' }}>All Categories</Typography>
                                {categories ? (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                                        {
                                            categoriesTiles.map(categoryElement => (
                                                <Box sx={{ backgroundColor: '#fff', borderRadius: '5px', padding: '2px 15px 6px 15px', display: 'inline-block' }} key={categoryElement}>
                                                    <Link to={`/categories/${categoryElement}`} style={categoriesLinkCss} onClick={topScroll}>{categoryElement}</Link>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                )
                                    : 'loading'}
                            </Box>
                            <Box sx={{ margin: '30px 0px' }}>
                                <Typography sx={{ backgroundColor: '#1a66fbd4', padding: '5px 11px 5px 11px', color: '#fff', fontSize: '16px', fontWeight: '500', fontFamily: 'poppins' }}>Popular Posts</Typography>
                                {popularPost[0] ? (
                                    <Box>
                                        {
                                            popularPost.map(post => (
                                                <Box key={post.id} sx={{ backgroundColor: '#fff', margin: '10px 0px', padding: '10px' }}>
                                                    <Link to={`/posts/${post.slug}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                                                        <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500', fontSize: '14px' }} />
                                                    </Link>
                                                    <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '12px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                )
                                    : 'loading'}
                            </Box>

                        </Box>
                        {/* blog content */}
                        <Box className="blogsWrapper" sx={wrapperCss}>
                            {pageData.map(post => (
                                <Box className="blogItem" sx={itemCss} key={post.id}>
                                    <Box className='blogImageWrapper'>
                                        <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                                    </Box>
                                    <Box className='blogContent' sx={{ backgroundColor: '#fff', padding: "15px 15px 20px 15px", marginTop: "-6px" }}>
                                        <Link to={`/posts/${post.slug}`} style={{ color: 'black', textDecoration: 'none' }}>
                                            <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} onClick={topScroll} />
                                        </Link>
                                        <Divider sx={{ width: "100%", height: "1px", backgroundColor: "black", margin: "15px 0px 30px 0px" }} />
                                        <Typography sx={{ fontSize: '12px', fontFamily: 'open sans' }}>
                                            <span>By {post.yoast_head_json.twitter_misc['Written by']}</span>
                                            <span style={MiddleSpan}>{moment(post.date).format('ll')}</span>
                                            <span style={{ display: 'block' }}> categories :&nbsp;
                                                <Link to={`/categories/${categories[post.categories[0]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[0]]}</Link>
                                                <Link to={`/categories/${categories[post.categories[1]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[1] ? ", " + categories[post.categories[1]] : ""}</Link>
                                                <Link to={`/categories/${categories[post.categories[2]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[2] ? ", " + categories[post.categories[2]] : ""}</Link>
                                            </span>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )
                : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

        </>
    )
}
