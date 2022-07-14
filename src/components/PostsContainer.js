import React from 'react';
import Post from './Post';

function PostsContainer() {
  return (
    <div id="posts-container">
      <Post avatar={require('../images/male-default-avatar.png')} name="Lauren L." postTitle="Title to the first post!" postContent="This is the first post to see what it will display like on our posts feed." postDate="7/13/2022" />
      <Post avatar={require('../images/male-default-avatar.png')} name="Christopher B." postTitle="Title to another post.." postContent="This is another post to get this social thing moving along." postDate="7/13/2022" />
    </div>
  )
}

export default PostsContainer