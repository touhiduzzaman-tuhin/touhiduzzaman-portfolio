import React from "react";
import touhiduzzaman from "../../images/touhiduzzaman-tuhin.JPG";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from '../../files/Touhiduzzaman-tuhin.pdf';
import { Link } from "react-router-dom";
import './Home.css';
const Header = () => {
  const expertise = [
    "I am ",
    2000,
    "I am a Javascript Web Developer",
    5000,
    "I am a Front-end web developer",
    5000,
  ];
  return (
    <div className="home-page">
      <div className="container row">
        <div className="col-md-7 pl-5" style={{ marginTop: "170px" }}>
          <h5 style={{ color: "rgb(81, 233, 157)" }}>Hello, I am</h5>
          <Fade left>
            <h1 className="text-white">Touhiduzzaman</h1>
          </Fade>
          <Typical
            className="text-success mb-5 h3"
            steps={expertise}
            loop={Infinity}
            wrapper="p"
          />
          <h6 className="text-white mb-5">
            I am a react and javascript lover.recently i have finished more than
            a few projects or many projects on javascript and react.js. so click
            here (about me) about me know more details
          </h6>
          <a
            style={{ fontSize: "30px", color: "white", paddingRight: "30px" }}
            href="https://github.com/touhiduzzaman-tuhin" target="_blank"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            style={{ fontSize: "30px", color: "white", paddingRight: "30px" }}
            href="https://www.linkedin.com/in/md-touhiduzzaman-a8451b1b4/" target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            style={{ fontSize: "30px", color: "white" }}
            href="https://www.facebook.com/touhiduzzaman.tuhin.9/" target="_blank"
          >
            <FaFacebookSquare></FaFacebookSquare>{" "}
          </a>
          <br />
          <br />

          <div className='home-footer'>
            <Link to="/about">
              <button
                class="btn btn-success my-2 my-sm-0 text-white mr-4"
                type="submit"
              >
                About Me
              </button>
            </Link>
            <a href={resume} download="Touhiduzzaman CV.pdf">
              <button className="btn btn-danger text-white pd-4">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-5" style={{paddingLeft: '100px'}}>
          D0C0
          <img
            style={{ width: "80%", height: "50%", marginTop: "120px", borderRadius: "50%" }}
            src={touhiduzzaman}
            alt=""
          />
        </div>
      
      </div>
    </div>
  );
};

export default Header;