import React from 'react';
import { Link } from "react-router-dom";
import TagSearch from "../tag-form/TagSearch";
import { Icon } from 'semantic-ui-react';

const Navigation = props => {


  return (
    <>
      <nav className='Navigation'>
        <Link to='/'><Icon name='home' /></Link>
        <Link to='/about'><Icon name='id card' /></Link>
        <Link to='/contact'><Icon name='envelope' /></Link>
        <TagSearch />
      </nav>
    </>
  );
};

export default Navigation;