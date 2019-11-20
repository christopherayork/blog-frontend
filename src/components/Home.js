import React from 'react';
import PostsList from './posts/PostsList';
import Navigation from "../components/navigation/Navigation";

const Home = props => {
  return (
    <>
      <Navigation {...props} />
      <PostsList {...props} />
    </>
  );
};

export default Home;