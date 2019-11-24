import React, { useState, useEffect } from 'react';
import PostStyled from "./styles/PostPage";
import axios from 'axios';

const REQUEST = false;

const PostPage = props => {
  const [post, setPost] = useState({
    author: '',
    title: '',
    tags: '',
    post: '',
    image: ''
  });
  console.log(props);

  useEffect(() => {
    if(!REQUEST) return;
    axios.get(`${process.env.BACKEND}/posts/${props.match.params.title}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch(e => console.error(e.response));
  }, []);

  return (
    <>
      <PostStyled>

      </PostStyled>
    </>
  );
};

export default PostPage;