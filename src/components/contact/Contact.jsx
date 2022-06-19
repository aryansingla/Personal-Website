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
        "service_3ba1osf",
        "template_apl175w",
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
        <div className="c-right" style={{backgroundImage:`url(${Contact1})` , backgroundSize:"1050px" , height:"600px" , width:"1050px"}}>
           
            <div className="r1">
              <h1 className="r-title">Get In Touch</h1>
              <p className="r-subtitle">Think I'd Good Fit For You ? Drop Me A Line And We Can Get Started!</p>
            <div className="r-content">
            <div className="rc1">
              <h4 className="rc1-title">Follow Me Elsewhere</h4>
              <h4><a href="" className="rc1-subtitle">LinkedIn</a></h4>
              <h4><a href="" className="rc1-subtitle">Twiiter</a></h4>
              <h4><a href="" className="rc1-subtitle">Github</a></h4>
              <h4><a href="" className="rc1-subtitle">Instagram</a></h4>
            </div>
            <div className="rc2">
              <div className="rc2up">
                {/* name and email */}
                <div className="rc2name">
                <h4 className="rc2name1">Your Name</h4>
                <input
              style={{ backgroundColor: "whitesmoke" , width:"220px" , height:"30px"}}
              type="text"
              name="user_name"
            />
                </div>
                <div className="rc2mail">
                <h4 className="rc2mail1">Your Email</h4>
                <input style={{backgroundColor:"whitesmoke" ,width:"220px" , height:"30px"}} type="email" name="user_email"/>
                </div>
              </div>
              <div className="rc2low">
                {/* message */}
                <div className="rc2msg">
                <h4 className="rc2mail1">Message</h4>
                <input style={{backgroundColor:"whitesmoke" ,width:"510px" , height:"80px"}} type="text" name="message" rows="5"/>
                </div>
                <div className="button2">Submit Message</div>
              </div>
            </div>
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
           </a> */}
