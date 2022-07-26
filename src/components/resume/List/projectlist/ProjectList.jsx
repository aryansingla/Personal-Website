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
            <h5>Oxygen Gym</h5>
            </div>
            <div className="ed2">
              <div className="year">
                May ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS ,Rapid API , Material UI , React Hooks , Javascript</div>
                <p className="textB">Website for workout of any muscle of human body with youtube tutorials and similar workouts.</p>
            </div>
        <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>Personal Portfolio Website</h5>
            </div>
            <div className="ed2">
              <div className="year">
                June ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS , Firebase</div>
                <p className="textB">A Personal Portfolio website to showcase all my details and projects at one place.</p>
            </div>
            <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>VB NEWS</h5>
            </div>
            <div className="ed2">
              <div className="year">
                April ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS , Javascript , Api</div>
                <p className="textB">Developed a wesbite to get news of different categories like finance , entertainment , science etc.Its a completely responsive website</p>
            </div>
    </div>
  )
}

export default ProjectList;

