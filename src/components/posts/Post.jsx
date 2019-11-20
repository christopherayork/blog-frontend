import React from 'react';
import { Image } from "semantic-ui-react";

const Post = ({ post }) => {

  return (
    <div className='post'>
      <h2 className='post-title'>{post.title}</h2>
      <h3 className='author'>- by <span className='authorName'>{post.author}</span></h3>
      <h4 className='tagline'>{post.tags}</h4>
      <div className='post-content'>
        <p>{post.post}</p>
        <Image src={post.image} fluid />
      </div>
    </div>
  );
};

export default Post;