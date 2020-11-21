// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import cv from '../../files/touhiduzzaman-resume.pdf';

// const Header = () => {

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg sticky-top">
//             <div className="container">
//                 {/* <a className="navbar-brand" href="/"><img src="" alt="Shakil Ahmed" /></a> */}
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                         <li className="nav-item">
//                             <Link to="/about" style={{ textDecoration: "none"}}>
//                                 <h4 className="nav-link" href=" ">About<span className="sr-only">(current)</span></h4>
//                             </Link>
//                         </li>                      
                        // <li className="nav-item">
                        //     <Link to="/projects" style={{ textDecoration: "none"}}>
                        //         <h4 className="nav-link" href=" ">Projects</h4>
                        //     </Link>
                        // </li>
//                         <li className="nav-item">
//                             <Link to="/contact" style={{ textDecoration: "none"}}>
//                                 <h4 className="nav-link" href=" ">Contact</h4>
//                             </Link>                            
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/blogs" style={{ textDecoration: "none"}}>
//                                 <h4 className="nav-link" href=" " rel="noopener noreferrer" >Blog</h4>
//                             </Link>               
//                         </li>
//                     </ul>

//                     <a href={cv} download="Touhiduzzaman CV"><button className="btn btn-outline-success my-2 my-sm-0" >Get Resume</button></a>
//                 </div>
//             </div>
//         </nav >
//     );
// };

// export default Header;

import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {  

    return ( 
        <div>
            <Navbar fixed="top" b expand="lg" style={{background:"#2d313b"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'  />
                <Navbar.Collapse id="basic-navbar-nav">
                   <h3 class='text-white'> TOUHIDUZZAMAN </h3>
                    <Nav className="ml-auto">
                    <Nav.Link  className="my-nav-link home-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/home' ? 'rgb(81, 233, 157)':'white'}`}} to={`/home`}>
                           <h5> Home</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/about-me' ? 'rgb(81, 233, 157)':'white'}`}} to={`/about`}>
                           <h5>About Me</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-project' ? 'rgb(81, 233, 157)':'white'}`}} to={`/projects`}>
                           <h5> Projects</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link className="my-nav-link">
                        <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-blog' ? 'rgb(81, 233, 157)':'white'}`}} to={`/blogs`}>
                             <h5>Blog</h5>
                        </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link mr-5">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/contack-us' ? 'rgb(81, 233, 157)':'white'}`}} to={`/contact`}>
                           <h5> Contact</h5>
                    </Link>
                    </Nav.Link>
                          <a href="https://drive.google.com/file/d/1o5TkVM3nM5Gqu9aT3u95L-6cIy8WXrv2/view?usp=sharing" target="_blank"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Resume.pdf</button> </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
