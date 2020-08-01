import React, { useState, useEffect } from 'react';
import { HomeStyles } from '../styles';

const Home = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // do axios stuff in here
  }, []);

  return (
    <HomeStyles>

    </HomeStyles>
  );
};

export default Home;

