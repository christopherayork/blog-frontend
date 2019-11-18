import React from 'react';
import { Link } from "react-router-dom";
import TagSearch from "../tag-form/TagSearch";
import { Icon } from 'semantic-ui-react';
import NavStyled from "./styles";

const Navigation = props => {


  return (
    <NavStyled>
      <div className='links'>
        <Link to='/'><Icon name='home' size='large' /></Link>
        <Link to='/about'><Icon name='id card' size='large' /></Link>
        <Link to='/contact'><Icon name='envelope' size='large' /></Link>
      </div>
      <TagSearch />
    </NavStyled>
  );
};

export default Navigation;