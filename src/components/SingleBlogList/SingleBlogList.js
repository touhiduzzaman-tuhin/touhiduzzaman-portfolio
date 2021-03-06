import React from 'react';
import './SingleBlogList.css';


const SingleBlogList = (props) => {
    const { image, title, description, blogLink } = props.blog;
    return (
        <div className='mb-4'>
            <div className="card bg-dark text-light">
                <img src={image} className="card-img-top blog-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center mt-4">{title}</h5>
                </div>
                <a href={blogLink} target='_blank' className="btn btn-success blog-button">Read more</a>
            </div>
        </div>

        // </div>
    );
};

export default SingleBlogList;
