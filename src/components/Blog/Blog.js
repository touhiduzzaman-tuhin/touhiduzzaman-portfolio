import React, { useState, useEffect } from 'react';
import './Blog.css';
import allBlog from '../../Data/AllBlogList';
import SingleBlogList from '../SingleBlogList/SingleBlogList';
const Blog = () => {
    const blogs = allBlog;
    // console.log(blogs)
    return (
        <div className=" container blog-page">
            <div className="text-center section-header">
                <h1>Blogs -</h1>
            </div>
            <div className="card-columns">
                {
                    blogs.map(blog => <SingleBlogList key={blog.id} blog={blog}></SingleBlogList>)
                }
            </div>

        </div>
    );
};

export default Blog;