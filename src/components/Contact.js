import React ,{useRef,useState} from "react";
import emailjs from 'emailjs-com';
import "./allcss/contact.css";
import * as des from './data';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4if8mlb', 'template_mr8bsod', form.current, 'kE0Gj_aAHNEtAo7rg')
        .then((result) => {
            form.current.reset();
            alert("Message Sent Successfully");
        }, (error) => {
            alert("Message Failed to Send");
        });
    };    


  return (
    <div className="container page" id="contact">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[4].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="container-middle">
            <div className="content">
                <h1 className="heading">Contact Me</h1>
                <form className="contact-form" onSubmit={sendEmail} ref={form} >
                    <input type="text" name="name"  placeholder="Name" className="input-box"  required/>
                    <input type="email" name="email" placeholder="Email"  className="input-box"  required/>
                    <input type="text" name="message" placeholder="Enter Your Message" className="input-message" required/>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>

        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[4].end}</div>
   </div>
  );
}