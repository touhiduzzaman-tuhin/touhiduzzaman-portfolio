import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import touhiduzzaman from '../../images/touhiduzzaman-tuhin.JPG';

const MyInformation = () => {
    return (
        <div style={{marginBottom:"50px"}}>
            <img className='ml-5 mb-3' style={{width:"200px", height:"200px", borderRadius:"50%"}} src={touhiduzzaman} alt=""/>
            <p style={{fontSize:"17"}}>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
            <Link to='/contact'>
                <a href="#">
                <Button className="btn btn-sm" style={{background:"#e31b6d", outline:"none", border:"none"
                    , borderRadius:"8px"}}>Contact Me</Button>
                </a>
            </Link>
        </div>
    );
};

export default MyInformation;