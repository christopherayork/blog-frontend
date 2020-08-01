import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import StockPost from '../../assets/stockPost.png';

const REQUEST = true;

const PostPage = props => {
  const [post, setPost] = useState({
    author: '',
    title: '',
    tags: '',
    body: '',
    image: ''
  });
  console.log(props);

  useEffect(() => {
    if(!REQUEST) return;
    axios.get(`${process.env.REACT_APP_BACKEND}/posts/${props.match.params.title}`)
      .then(res => {
        console.log(res.data);
        if(Array.isArray(res.data)) setPost(res.data[0]);
        else setPost(res.data);
      })
      .catch(e => console.error(e.response));
  }, [props.match.params.title]);
  console.log(post);
  return (
    <>
      <div className='post'>
        <h1 className='post-title'>{post.title}</h1>
        <h2 className='author'>{post.author}</h2>
        <h3 className='tagline'>{post.tags}</h3>
        <div className='image-wrapper'>{post.image ? <img src={post.image} alt='post banner' /> : null}</div>
        <div className='post-content'>
          {post.body}
        </div>
      </div>
    </>
  );
};

export default PostPage;