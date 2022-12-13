import React ,{useRef}from 'react'
import emailjs from 'emailjs-com';
import './Css/Contact.css'

export default function Contact({archi,divname}) {
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
    <div className='universalBox' id="Contact">
        <p className='section_up'>{archi.start}</p>
        <p className='div_up'>{divname.start}</p>
        <div className="containerflex">
            <div className="contactcontent">
                <h1 className="title">Contact Me</h1>
                <form className="contact-form" onSubmit={sendEmail} ref={form} >
                    <input type="text" name="name"  placeholder="Name" className="input-box"  required/>
                    <input type="email" name="email" placeholder="Email"  className="input-box"  required/>
                    <input type="text" name="message" placeholder="Enter Your Message" className="input-message" required/>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <p className='div_down'>{divname.end}</p>
        <p className='section_down'>{archi.end}</p>
    </div>
  )
}
