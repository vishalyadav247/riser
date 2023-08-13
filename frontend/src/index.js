import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import SinglePost from './pages/SinglePost';
import CategoryBlogs from './pages/CategoryBlogs';

const App = () => {

  const [data, setData] = useState([]);   // All blogs data 
  const [categories, setCategories] = useState({});   // Categories list define by Admin
  const [popularPost, setPopularPost] = useState({});   // All popular post listed by using popular tag
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    function my() {

      // Getting All post data
      const p1 = new Promise((resolve, reject) => {
        axios.get(`https://${apiUrl}/wp-json/wp/v2/posts?per_page=100`).then((response) => {
          const posts = response.data;
          resolve(posts)
        })
      });

      // Getting Post Caterories list
      const p2 = new Promise((resolve, reject) => {
        axios.get(`https://${apiUrl}/wp-json/wp/v2/categories`).then((response) => {
          const cat = response.data;
          const catList = {}
          for (let b of cat) {
            catList[b.id] = b.name;
          }
          resolve(catList)
        })
      })

      // Getting post by tag name (popular)
      const p3 = new Promise((resolve, reject) => {
        axios.get(`https://${apiUrl}/wp-json/wp/v2/tags`).then((response) => {
          const tag = response.data;
          const tagList = {};
          let popPost = [];
          for (let b of tag) {
            tagList[b.id] = b.name;
          }
          for (let b in tagList) {
            if (tagList[b] === 'Popular') {
              axios.get(`https://${apiUrl}/wp-json/wp/v2/posts?tags=${b}`).then((response) => {
                const dat = response.data;
                for (let i in dat) {
                  popPost.push(dat[i])
                }

                resolve(popPost)
              })
              break
            }
          }

        })
      })

      Promise.all([p1, p2, p3]).then((values) => {
        setData(values[0]);
        setCategories(values[1]);
        setPopularPost(values[2]);
      });
    }
    my()

  }, [])


  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          {/* Navigtion Routes */}
          <Route index path="/" element={<Home data={data} categories={categories} />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects data={data} categories={categories} />} />
          <Route path="blogs" element={<Blogs data={data} categories={categories} popularPost={popularPost} />} />
          {/* blog detail page route */}
          <Route path="/posts/:slug" element={<SinglePost data={data} categories={categories} popularPost={popularPost} />} />
          <Route path="/categories/:categoryName" element={<CategoryBlogs data={data} categories={categories} popularPost={popularPost} />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
        <AppFooter />
      </BrowserRouter>
    </React.StrictMode >
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
