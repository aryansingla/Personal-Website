import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Contact1 from "../../img/Contact1.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4x11lyc",
        "template_xtzq1qg",
        formRef.current,
        "U0HKmu56a_qWHvxWz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
      formRef.current.reset();
      e.target.reset();
  };


  return (
    <div className="c" id="c">   
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-seperatorblob">
            <div></div>
          </div>
        <div className="c-seperatorline"></div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              9518422428
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              singlaaryan2001@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Delhi ,India
            </div>
          </div>
        </div>
        <div className="c-right" style={{backgroundImage:`url(${Contact1})` , backgroundSize:"1050px" ,}}>
           
            <div className="r1">
              <h1 className="r-title">Get In Touch</h1>
              <p className="r-subtitle">Think I'd Good Fit For You ? Drop Me A Line And We Can Get Started!</p>
            <div className="r-content">
            
            <div className="rc2">
                <form ref={formRef} onSubmit={handleSubmit}>
                <div className="rc2name">
                <input
              style={{ backgroundColor: "whitesmoke" , width:"15rem" , height:"2rem"}}
              type="text"
              name="name" 
              placeholder="Your Name"
            />
            </div>
            <div className="rc2mail">
                <input style={{backgroundColor:"whitesmoke" ,width:"15rem" , height:"2rem"}} type="email" name="email" placeholder="Your Email"/>
                </div>
                <div className="rc2msg">
                <textarea className="mail1" style={{backgroundColor:"whitesmoke" ,}} type="text" name="message" rows="5" placeholder="Your Message"/>
                </div>
                <button className="button2">Submit Message</button>
                {done }
                </form>
              </div>
            
            <div11 className="rc1">
              <h4 className="rc1-title">Follow Me Elsewhere</h4>
              <div className="r-socials">
              <div><a href="https://www.linkedin.com/in/aryan-singla-26b7481b7" className="rc1-subtitle">LinkedIn</a></div>
              <div><a href="https://twitter.com/singla_aryan11" className="rc1-subtitle">Twiiter</a></div>
              <div><a href="https://github.com/aryansingla" className="rc1-subtitle">Github</a></div>
              <div><a href="https://www.instagram.com/singlaaryan_1102/" className="rc1-subtitle">Instagram</a></div>
              </div>
            </div11>
            </div>
            
           </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Contact;














{/* <p className="c-desc">
            <b>Want to Connect?</b> Get in touch. Always available for people if
            the right motive comes along.
            </p>
           <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: "whitesmoke" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: "whitesmoke" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: "whitesmoke" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: "whitesmoke" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
           </form>
           <a className="gotop" href="#n">
            <div className="btn-scroll" href="#n">
              <FaArrowUp className="icn"/>
              </div>
              </a>
           </a> */}



          //  <div className="rc2">
          //     //<div className="rc2up">
          //      <div className="rc2name">
               
          //       <form ref={formRef} onSubmit={handleSubmit}>
          //       <input
          //     style={{ backgroundColor: "whitesmoke" , width:"220px" , height:"30px"}}
          //     type="text"
          //     name="name" 
          //     placeholder="Your Name"
          //   />
            
          //       </div>
          //      <div className="rc2mail">
               
               
          //       <input style={{backgroundColor:"whitesmoke" ,width:"220px" , height:"30px"}} type="email" name="email" placeholder="Your Email"/>
          //       </div>
          //     </div>
          //    <div className="rc2low">
               
          //       <div className="rc2msg">
               
          //       <textarea className="mail1" style={{backgroundColor:"whitesmoke" ,}} type="text" name="message" rows="5" placeholder="Your Message"/>
          //       </div>
                
          //       <button className="button2">Submit Message</button>
          //        </form> 
          //     </div>