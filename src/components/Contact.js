import React from 'react';
import Navigation from "./navigation/Navigation";

const Contact = (props) => {

  return (
    <>
      <Navigation {...props} />
      <div className='contact-container'>
        Contact info here
      </div>
    </>
  );
};

export default Contact;