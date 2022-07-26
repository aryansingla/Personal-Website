import React from 'react'
import "./progSkills.css";
const ProgSkills = () => {
  return (
 <div className='ps-wrapper'>
    <div className="ps-container"> 

         <div className="leftps">

                <div className="ps-skills">
                <div className="ps-details">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div className="ps-bar">
                <div id="html-bar"></div>
                </div>
                </div> 
         
                    <div className="ps-skills">
                    <div className="ps-details">
                        <span>CSS</span>
                        <span>70%</span>
                    </div>
                    <div className="ps-bar">
                    <div id="css-bar"></div>
                    </div>
                    </div> 

                  <div className="ps-skills">
         <div className="ps-details">
            <span>Javascript</span>
            <span>50%</span>
          </div>
         <div className="ps-bar">
         <div id="js-bar"></div>
         </div>
         </div> 

         <div className="ps-skills">
         <div className="ps-details">
            <span>React Js</span>
            <span>80%</span>
          </div>
         <div className="ps-bar">
         <div id="react-bar"></div>
         </div>
         </div> 

         <div className="ps-skills">
         <div className="ps-details">
            <span>Redux-Toolkit</span>
            <span>60%</span>
          </div>
         <div className="ps-bar">
         <div id="redux-bar"></div>
         </div>
         </div>   

                </div>
         <div className="rightps">
              <div className="ps-skills">
              <div className="ps-details">
                <span>Java</span>
              <span>60%</span>
               </div>
               <div className="ps-bar">
             <div id="java-bar"></div>
             </div>
              </div>  
         
              <div className="ps-skills">
             <div className="ps-details">
              <span>Git and Github</span>
              <span>80%</span>
              </div>
               <div className="ps-bar">
             <div id="git-bar"></div>
              </div>
               </div>  

               <div className="ps-skills">
                  <div className="ps-details">
                    <span>Netlify</span>
                    <span>90%</span>
                  </div>
                   <div className="ps-bar">
                   <div id="firebase-bar"></div>
                    </div>
                </div>
         </div>
        </div>
    </div>
  )
}

export default ProgSkills


{/*   */}