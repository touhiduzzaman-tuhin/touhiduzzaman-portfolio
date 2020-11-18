// import React from 'react';
// import './About.css';
// import touhiduzzaman from '../../images/touhiduzzaman-tuhin.JPG'

// const About = () => {
//     return (
//         <div className="aboutArea pageMarsing">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-7">

//                         <article>
//                             <div className="sectionHeading">
//                                 <h2>Md Touhiduzzaman</h2>
//                                 <h4>Web Developer</h4>
//                             </div>
//                             <p>A technically savvy web developer, who has multiple years of website design expertise behind her. Ariful Islam can be a strong driving force for improving the performance, scalability and reliability of development projects. He has a long track record of creating dynamic, rich and interesting web portals and of providing long term solutions to front-end problems. He is currently looking for a suitable position with a responsible employer who will assist in the development of his career & skills.</p>
//                         </article>
//                         <article>
//                             <div className="sectionHeading">
//                                 <h4>Skill</h4>
//                             </div>
//                             <p>
//                                 Expertise: React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3</p>
//                             <p>Comfortable: Redux.js, Node.js, Express.js, MongoDB, JSON</p>
//                             <p>Familiar: React-Native.js PHP, WordPress, jQuery Plugin, MYSQL</p>
//                             <p>Tools: GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool. </p>
//                             <a href="https://drive.google.com/file/d/1LD3Ndp_0T2s0wy3Il-gZMUc2LwDLN5CB/view?usp=sharing" target="_blank" className="downloadBTN">Download CV</a>
//                         </article>
//                     </div>
//                     <div className="col-md-5 mr-auto">
//                         <img src={touhiduzzaman} alt="" height="300px"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

// import React from 'react';
// import touhiduzzaman from "../../images/touhiduzzaman-tuhin.JPG"
// // import animation from "../../images/animation.gif"
// // import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
// const About = () => {
//     return (
//         <div>
//        <div className="container">
//     <h1 style={{ color:'white', textAlign: "center",marginBottom:"50px",paddingTop:'30px' }}>
//         About <span style={{ color: "rgb(81, 233, 157)"}}>Me </span>
//    </h1>
//   <div className="row">
//        <div className="col-md-6">
//          <img style={{height:'200px',margin:'0 auto',marginBottom:'15px',borderRadius:'50%'}} src={touhiduzzaman} alt=""/>
//          <h2 className='text-white'> <span style={{color:'rgb(81, 233, 157)'}}>I'am</span> Shahadat Hossain</h2>
//         <p className='text-white mb-3'>I am shahadat.i am a front-end developer.recently i have finished more than a few  projects or many projects on javascript and react.js. And I can make perfect responsive website design with css,bootstrap4,material ui, flexbox, and grid layout.i also have solid knowledge working with node.js,express.js mongodb,firebase, and heroku.now i am ready and excited for learn redux ,and react native</p>
//       </div>
//       <div className="col-md-6"> 
//         <h3 className='text-white'>My programming skill</h3>
//          <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
//          <div className='technolog'>
//            <span>React.js</span>
//            <span>javascript</span>
//            <span>bootstrap4</span>
//            <span>Material-Ui</span><br/><br/>
//            <span>ES6</span>
//            <span>Node.js</span>
//            <span>Express.js</span>
//            <span>mongodb</span>
//            <span>firebase</span><br/><br/>
//            <span>Heroku</span>
//            <span>Vs code</span>
//          </div>
           
//          <h3 className='text-white mt-4'>I want to work with</h3>
//          <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
//          <div className='technolog'>
//            <span>React.js</span>
//            <span>javascript</span>
//            <span>Node.js</span>
//             <span>mongodb</span>
//            <br/><br/>
//          </div>

//          <h3 className='text-white mt-4'>Looking forward to learn</h3>
//          <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
//          <div className='technolog'>
//            <span>Redux.js</span>
//            <span>C</span>
//            <span>Mysql</span>
//             <span>React native</span>
//            <br/><br/>
//          </div>
//       </div>
//   </div>
//   <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>shahadat hossain</span></h5>
//        </div>
//    </div>
//     );
// };

// export default About;

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css"
import MyInformation from './MyInformation';
import MySkills from './MySkills';
const About = () => { 
    return (
        <div className="container about-container">
            <Row>
                <Col md={6} xs={12}>
                    <MyInformation></MyInformation>
                </Col>
                <Col md={6} xs={12}>
                <MySkills></MySkills>
                </Col>
            </Row>
        </div>
    );
};

export default About;