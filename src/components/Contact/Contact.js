// import React from 'react';
// import emailjs from 'emailjs-com'
// import './Contact.css'

// const Contact = () => {
//     const sendEmail = e => {
//         e.preventDefault();

//     emailjs.sendForm('gmail', 'template_rqbcaxx', e.target, 'user_PZ7G31scmxCmOoXslb2Ps')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//     }
//     return (
//         <div className="contact-body">            
//             <div className="container">
//             <form onSubmit={sendEmail}  >

//             <h1 style={{color:" white", textAlign:"center", margin:"20px 0px 20px 0px"}} >Get In Touch</h1>
                   
//                     <div className="row mx-auto">
                        
//                         <div   className="col-8 form-group mx-auto  ">
//                             <input width="300px" style={{width:"500px"}} type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="email" style={{width:"500px"}} className="form-control" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="text" style={{width:"500px"}} className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <textarea className="form-control" style={{width:"500px"}} id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-8 pt-3 mx-auto mb-4">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("gmail", 'template_rqbcaxx', e.target, 'user_PZ7G31scmxCmOoXslb2Ps')
          .then((result) => {
              window.alert("Email sent to touhiduzzamantuhin95@gmail.com")
          }, (error) => {
              window.alert(error.text)
          });
          e.target.reset()
      }
    return (
        <div className='contact-container'>
            <Form className='form-container' onSubmit={sendEmail}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" name="name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="type your message here" name="message" />
                </Form.Group>
                <Button style={{background:"#e31b6d",border:"none", outline:"none" }}
                className='btn custom-button' type="submit">
                    Submit
                </Button>
            </Form>

            
        </div>
    );
};

export default Contact;