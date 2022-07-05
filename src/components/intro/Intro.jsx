import "./intro.css";
import Profilepic from "../../img/Profilepic.jpg";
import triangle2 from "../../img/triangle2.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Intro = () => {
    return (
        <>
            <div className="i" id="i">
                <div className="i-top">
                    <div className="i-left">
                        <h2 className="i-intro">
                            Namaskar Everyone , I am
                            <br />
                            <span className="i-name">Aryan Singla </span>
                        </h2>
                        {/* <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">
                                        Microsoft Learn Student Ambassador
                                    </div>
                                    <div className="i-title-item">
                                        Front End Developer
                                    </div>
                                    <div className="i-title-item">
                                        MERN Stack
                                    </div>
                                    <div className="i-title-item">React.Js</div>
                                    <div className="i-title-item">
                                        Consistent
                                    </div>
                                </div>
                            </div> */}
                        <p className="i-desc">
                            I design and develop services for customers of all
                            sizes, specializing in creating stylish, modern
                            websites, web services and online stores.
                        </p>
                        <div className="i-btn">
                            <a className="left-btn1" href="#c">
                                Hire Me
                            </a>
                            <div className="left-btn2">Get Resume</div>
                        </div>
                    </div>

                    <div className="i-right">
                        <img src={Profilepic} alt="" className="i-img" />
                    </div>

                    <div className="social-handles">
                        <div>
                            <AiFillLinkedin
                                className="social-icons"
                                id="Linkedin"
                            />
                        </div>
                        <div>
                            <AiFillGithub
                                className="social-icons"
                                id="Github"
                            />
                        </div>
                        <div>
                            <BsTwitter className="social-icons" id="Twitter" />
                        </div>
                        <div>
                            <BsInstagram className="social-icons" id="Insta" />
                        </div>
                    </div>
                </div>

                <div className="i-desgin-bottom">
                    <img src={triangle2} className="i-img2" alt="" />
                </div>
            </div>
        </>
    );
};

export default Intro;
