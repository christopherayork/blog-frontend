import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from "semantic-ui-react";
import StockPost from '../../assets/stockPost.png';

const Post = ({ post }) => {
  let url = post.title.replace(/\s/g, '_');
  return (
    <div className='post'>
      <h2 className='post-title'><Link to={`/posts/${url}`}>{post.title}</Link></h2>
      <h3 className='author'>- by <span className='authorName'>{post.author}</span></h3>
      <h4 className='tagline'>{post.tags.map(t => <Link key={t} to={`/?tags=${t}`}>{`#${t}`}</Link>)}</h4>
      <div className='post-content'>
        <p>{post.body}</p>
        <Image src={post.image ? post.image : StockPost} fluid />
      </div>
    </div>
  );
};

export default Post;

