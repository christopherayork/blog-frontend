import styled from 'styled-components';

const NavStyled= styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: #333739;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #777;
  box-shadow: #222 0 3px 10px, inset 0 1px 2px rgba(0,0,0,.39);
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 320px) {
    width: 100%;
    
  }
  
  div.links {
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: 500px) {
      width: 40%;
      margin-bottom: 10px;
    }
  
    a {
      color: #555;
      background: #EEE;
      border-radius: 10%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        background: #DDD;
      }
      
      i {
        margin: auto;
      }
    }
  }
  
`;

export default NavStyled;