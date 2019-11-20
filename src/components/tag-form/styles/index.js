import styled from "styled-components";

const TagSearchStyled = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  justify-content: space-evenly;
  
  @media (max-width: 320px) {
    width: 320px;
  }
  
  .input {
    
    @media (max-width: 320px) {
      
    }
   
  }
  
  button {
    height: 100%;
    
    @media (max-width: 320px) {
      height: 38px;
      padding: 0;
      z-index: 2;
    }
    
  }
`;

export default TagSearchStyled;