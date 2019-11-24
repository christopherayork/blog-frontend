import React from 'react';
import Navigation from "../components/navigation/Navigation";

const About = (props) => {
  return (
    <>
      <Navigation {...props} />
      <div className='about-container'>
        Some stuff
      </div>
    </>
  );
};

export default About;