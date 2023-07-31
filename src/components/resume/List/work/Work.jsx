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
            <h5>Itmtb Technologies Pvt. Ltd.</h5>
            <p>Full Stack Developer</p>
      </div>
            <div className="ed2">
              <div className="year">
                Sept 2022 - Oct 2022
              </div>
            </div>
        </div>
        <div className="text">
      
            <div className="textB"> - Contributed to the development of a dynamic company website, gaining expertise in crafting efficient data models and reusable components </div>
            <div className="textB"> -. Enhanced website security and implemented robust unit test cases. Specialized in creating role-based websites with a well structured backend and token-based authentication. </div>
            <div className="textB"> - Proficiently handled custom error management for seamless UI, logic, and development integration. Collaborated with mentors & team members for optimized solutions.</div>
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