import styled from 'styled-components';


const ListStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
  
  div.posts {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media (max-width: 800px) {
      width: 80%;
    }
    
    @media (max-width: 500px) {
      width: 100%;
      justify-content: center;
    }
    
    @media (max-width: 320px) {
      
      flex-direction: column;
      flex-wrap: nowrap;
      
    }
    
    div.post {
      padding: 10px;
      box-sizing: border-box;
      background: #FEFEFE;
      border-radius: 5px;
      //margin-bottom: 15px;
      margin: 0 0.5% 15px 0.5%;
      width: 32%;
      
      @media (max-width: 800px) {
        width: 80%;
      }
      
      @media (max-width: 500px) {
      width: 95%;
      }
      @media (max-width: 320px) {
        width: 100%;
      }
      
      h2.post-title {
        height: 15px;
        
      }
      
      h3.author {
        font-size: 1.1rem;
        height: 10px;
        
        span.authorName {
          
        }
      }
      
      h4.tagline {
        color: dodgerblue;
        font-size: 1.2rem;
        height: 20px;
        margin-bottom: 10px;
        margin-top: -5px;
      }
      
      div.post-content {
        
      }
      
      img {
        height: 34vh;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
`;

export default ListStyled;