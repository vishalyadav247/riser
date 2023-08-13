import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";




export default function RecentBlogs(props) {
    const { data, categories } = props;
    const [recentPost, setRecentPost] = useState([]);
    // const [categoryPosts, setCategoryPosts] = useState([]);


    // three recent posts component
    useEffect(() => {

        function my() {
            const p1 = new Promise((resolve, reject) => {
                const postArray = []
                for (let i = 0; i < 3; i++) {
                    const post = data[i];
                    postArray.push(post)
                }
                resolve(postArray)
            });
            p1.then((value) => {
                setRecentPost(value)
            })
        }
        my()

    }, [data])




    const wrapperCss = {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gridGap: "30px",
        maxWidth: "1000px",
        margin: "auto"
    }
    const itemCss = {
        borderRadius: "7px",
        border:'1px solid #e7e1e1',
        overflow: "hidden !important",
        margin: { xs: '0px 20px', md: '0px' }

    }
    const BlogTitle = {
        fontFamily: "poppins",
        color:'#000000',
        fontSize: "23px",
        fontWeight: "500",
        lineHeight: "27px",
        height: { xs: "85px", md: "80px", lg: "80px" },
        overflow: { xs: "hidden", md: "hidden", lg: "hidden" }
    }

    const categoriesLinkCss = {
        fontSize: '12px',
        fontFamily: 'open sans',
        textDecoration: 'none',
        color: "black"
    }

    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <Box sx={{ background:'#f8f8f8', padding: { xs: '100px 20px 100px 20px', md: '60px 50px', lg: '100px 0px 100px 0px' } }}>
            {recentPost[0] ? (
                <Box className="blogsWrapper" sx={wrapperCss}>
                    {recentPost.map(post => (
                            <Box className="blogItem" sx={itemCss} key={post.id}>
                                <Box className='blogImageWrapper'>
                                    <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                                </Box>
                                <Box className='blogContent' sx={{backgroundColor:'#ffffff', padding: "15px 15px 30px 15px", marginTop: "-6px" }}>
                                    <Typography sx={{ fontSize: '12px', fontFamily: 'open sans' }}>
                                        <span style={{ display: 'block' }} className='categoryTile'>
                                            <Link to={`/categories/${categories[post.categories[0]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[0]]}</Link>
                                            {post.categories[1] ? <Link to={`/categories/${categories[post.categories[1]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[1]]}</Link> : ""}
                                            {post.categories[2] ? <Link to={`/categories/${categories[post.categories[2]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[2]]}</Link> : ""}

                                        </span>
                                    </Typography>
                                    <Link to={`/posts/${post.slug}`} style={{ textDecoration: 'none'}} onClick={topScroll} >
                                        <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </Link>
                                    <Box sx={{marginTop:'60px',display:'flex'}}>
                                        <Box sx={{marginRight:'10px'}}>
                                            <Avatar src="/broken-image.jpg" />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: '12px', fontFamily: 'open sans' ,color:'#000000',fontWeight:'600'}}>
                                                {post.yoast_head_json.schema['@graph'][4].name}
                                            </Typography>
                                            <Typography sx={{ fontSize: '12px', fontFamily: 'open sans' ,color:'#000000'}}>
                                                {moment(post.date).format('MMMM Do , YYYY')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                    ))}
                </Box>
            ) : 'loading'}

        </Box>
    )
}
