import styled from 'styled-components';

const NavStyled= styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: #333739;
  padding: 10px 0;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #777;
  box-shadow: #222 3px 3px 10px, inset 0 1px 2px rgba(0,0,0,.39);
  
  div.links {
    width: 150px;
    display: flex;
    justify-content: space-evenly;
  
    a {
      color: #555;
      background: #EEE;
      border-radius: 10%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        background: #EFEFEF;
      }
      
      i {
        margin: auto;
      }
    }
  }
  
`;

export default NavStyled;