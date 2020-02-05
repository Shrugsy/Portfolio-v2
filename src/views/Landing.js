import React from "react";

const Landing = props => {
  return (
    <React.Fragment>
      <div id="top" className='landingContainer'>
        <div className='landingBackground'></div>
        <div className='landingContent'>
          I <span>design and build</span> tools centered around a
          <span> passion for productivity</span>.
          <div>
            <a className="noStyle" href="#About">
              Get to know me below.
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Landing;
