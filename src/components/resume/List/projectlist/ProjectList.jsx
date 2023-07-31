import React from 'react'
import "./projectlist.css";
const ProjectList = () => {
  return (
    <div className="main">
        <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>Dukaan Daar</h5>
            </div>
            <div className="ed2">
              <div className="year">
                March 2023
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: ReactJs,ExpressJs,NodeJs,MongoDb,TailwindCss</div>
                <p className="textB">This website is an innovative, user-friendly website for seamless online grocery shopping. Spearheaded real-time order tracking,secure payment integration,an intuitive UI with authentication & forgot password functionality.Includes comprehensive order history and user-admin dashboards for personalized experiences.</p>
            </div>
        <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>CollabX</h5>
            </div>
            <div className="ed2">
              <div className="year">
                May,2023
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: ReactJs,TailwindCss,DaisyUI,Blockchain</div>
                <p className="textB">CollabX is a decentralized community platform that enables hustlers to collaborate on projects. It facilitates transparent decision-making through decentralized voting and builds trust with a reputation system. The platform also offers token incentives, connects individuals, and showcases projects.</p>
            </div>
            <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>Oxygen Gym</h5>
            </div>
            <div className="ed2">
              <div className="year">
                August ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS ,Rapid API , Material UI , React Hooks , Javascript</div>
                <p className="textB">Website for workout of any muscle of human body with youtube tutorials and similar workouts.</p>
            </div>
    </div>
  )
}

export default ProjectList;

