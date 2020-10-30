import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg sticky-top">
            <div className="container">
                {/* <a className="navbar-brand" href="/"><img src="" alt="Shakil Ahmed" /></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/about" style={{ textDecoration: "none"}}>
                                <a className="nav-link" href=" ">About<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>                      
                        <li className="nav-item">
                            <Link to="/projects" style={{ textDecoration: "none"}}>
                                <a className="nav-link" href=" ">Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" style={{ textDecoration: "none"}}>
                                <a className="nav-link" href=" ">Contact</a>
                            </Link>                            
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" style={{ textDecoration: "none"}}>
                                <a className="nav-link" href=" " rel="noopener noreferrer" >Blog</a>
                            </Link>               
                        </li>
                    </ul>

                    <a href=" " download="Shakil Ahmed CV"><button className="btn btn-outline-success my-2 my-sm-0" >Get Resume</button></a>
                </div>
            </div>
        </nav >
    );
};

export default Header;