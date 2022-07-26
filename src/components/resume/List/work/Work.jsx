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
            <h5>HASHDEFINE HACKATHON</h5>
            <p>Front-End Developer</p>
      </div>
            <div className="ed2">
              <div className="year">
                May 2022
              </div>
            </div>
        </div>
        <div className="text">
      
            <div className="textB"> - Developed a website for user to select volunteer for NGOs and can donate into them. </div>
            <div className="textB"> - I stretchd my mental capacity to develope UI as much as good as possible.</div>
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