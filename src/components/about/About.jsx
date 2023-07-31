import "./about.css";
import gdsc from "../../img/gdsc.png";
import enactus from "../../img/enactus.png";
import mlsa from "../../img/mlsa.png";
import aboutpic from "../../img/aboutpic.jpeg";
const About = () => {
  return (
    <div className="a" id="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={aboutpic} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h4 className="a-subtitle">Why Choose Me?</h4>
        <div className="seperatorblob">
          <div></div>
        </div>
        <div className="seperatorline"></div>
        <p className="a-sub">
          Hello! My Name is Aryan Singla, I am an exceptional candidate for the
          SDE position, as my extensive skill set in the MERN stack, Next.js,
          and Tailwind CSS empowers me to craft dynamic and high-performing web
          applications. Furthermore, my commitment to staying up-to-date with
          the latest industry trends and advancements ensures that I can
          leverage cutting-edge technologies and best practices to drive
          innovation within your projects. I am a quick learner, always eager to
          expand my skill set and adapt to new challenges, making me an ideal
          fit for a fast-paced and dynamic work environment. Moreover, my
          previous internship in full-stack development has furnished me with
          invaluable hands-on experience in the industry, solidifying and
          refining my abilities. I am confident that my combination of technical
          expertise, practical experience, and strong work ethic make me a
          compelling choice for your company.
        </p>
        {/* <p className="a-desc">
          Mainly I do Front-end in React.Js . I am also a Microsoft Learn
          Student Ambassador , currently at Beta Stage after clearing alpha
          stage and aspiring towards Gold Stage. I am also member of technical
          team of Developer Students Club by Google.I also used to DSA problems
          in JAVA language. I am also an active member of Enactus
          Community(Non-Profit Organization).
        </p> */}
        <h5 className="highlights">Here are few highlights:</h5>
        <div className="points">
          <div className="bullet"></div>
          <div className="highlights-list">Full Stack Developer</div>
        </div>

        <div className="points">
          <div className="bullet"></div>
          <div className="highlights-list">MERN Stack </div>
        </div>
        <div className="points">
          <div className="bullet"></div>
          <div className="highlights-list">State Management</div>
        </div>
        <div className="points">
          <div className="bullet"></div>
          <div className="highlights-list">Responsive Web Desgin</div>
        </div>
        <div className="points">
          <div className="bullet"></div>
          <div className="highlights-list">Building REST API</div>
        </div>
        <div className="a-award">
          <img src={mlsa} alt="" className="a-award-img" />
          <img src={gdsc} alt="" className="a-award-img" />
          <img src={enactus} alt="" className="a-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
