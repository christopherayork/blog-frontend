import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListStyled from "./styles";
import Post from './Post';
import StockPost from '../../assets/stockPost.png';

const stockPost = {
  title: 'Function Currying',
  author: 'Chris York',
  tags: '#javascript #js #es6 #react #redux',
  post: 'Never love the believer, for you cannot grasp it. Yes, there is over there, it preaches with bliss. As i have viewed you, so you must realize one another. Not chaos or paradise, shape the career.',
  image: StockPost
};

const PostsList = props => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState(props.location.search || '');

  useEffect(() => {
    axios.get(`${process.env.BACKEND}/posts${query}`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.error(err.response));
  }, []);
  // map through posts once we setup state and create the cards
  return (
    <ListStyled>
      <div className='posts'>
        <Post post={stockPost} />
        <Post post={stockPost} />
        <Post post={stockPost} />
        <Post post={stockPost} />
        <Post post={stockPost} />
      </div>
    </ListStyled>
  );
};

export default PostsList;