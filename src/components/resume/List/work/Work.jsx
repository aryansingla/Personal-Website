import React from 'react'
import "./work.css";
const Work = () => {
  return (
    <div className="main">
          <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>ZEDSOFTPOINT SOLUTIONS</h5>
            <p>Front-End Developer Intern</p>
      </div>
            <div className="ed2">
              <div className="year">
                May 2022-Present
              </div>
            </div>
        </div>
        <div className="text">
        <div className="textA">Currently working as MERN stack web developer</div>
            <div className="textB"> - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .</div>
            <div className="textB"> - I stretch my mental capacity to develope UI as per the given designs.</div>
            </div>
            <div className="ed">
          <div className="ed0">
            <div className="bullet"></div>
          </div>
          <div className="ed1">
            <h5>Microsoft Learn Student Ambassador</h5>
            <p>Beta Stage</p>
      </div>
            <div className="ed2">
              <div className="year">
                Dec 2021-Present
              </div>
            </div>
        </div>
        <div className="text">
        {/* <div className="textA">Currently at Beta Stage</div> */}
            <div className="textB"> - Used to host events about different technologies , used to attend meetings , leagues etc.</div>
            {/* <div className="textB"> - Passed Alpha stage before.</div> */}
            </div>
    </div>
  )
}

export default Work