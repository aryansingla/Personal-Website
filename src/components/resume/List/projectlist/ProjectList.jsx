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
            <h5>Expense Tracker(Voice command)</h5>
            </div>
            <div className="ed2">
              <div className="year">
                May ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS ,Context API , Material UI ,Speechly</div>
                <p className="textB">An application used to calculate income and expenses from various sources and can be seen on graph , editable and voice command feature can be used.</p>
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
            <h5>LinkedIn Clone</h5>
            </div>
            <div className="ed2">
              <div className="year">
                June ,2022
              </div>
            </div>
        </div>
        <div className="text">
                <div className="textA">Technologies Used: React JS ,Redux- Toolkit ,Firebase</div>
                <p className="textB">It is clone of LinkedIn where user can login through google and user can post text , image or video. It is clone of home page.</p>
            </div>
    </div>
  )
}

export default ProjectList;

