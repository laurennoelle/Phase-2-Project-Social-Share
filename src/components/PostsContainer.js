import React from 'react';
import Post from './Post';
import { useRecoilState } from 'recoil'
import { currentUserObject, database } from '../atoms'

function PostsContainer() {

  const [theUserObject, setTheUserObject] = useRecoilState(currentUserObject);
  const [databaseContents, setDatabaseContents] = useRecoilState(database);

  function getMyCurrentFriendObjects(theFriend, trueFriend){
    console.log(theFriend, trueFriend)
    if(trueFriend === true){
      return databaseContents.filter((user) => user.username === theFriend)
    }
  }

  const unfixedFriends = theUserObject.friends.map((friend) => getMyCurrentFriendObjects(friend.username, friend.currentFriend))
  const unfixedFilteredFriends = unfixedFriends.filter((friend) => friend !== undefined)
  const addToFriendsList = unfixedFilteredFriends.map((friend) => friend[0])

  return (
    <div id="posts-container">
      {theUserObject.posts.map(post => <Post avatar={theUserObject.avatar} name={theUserObject.firstName + " " + theUserObject.lastName + "."} postTitle={post.postTitle} postContent={post.postBody} postDate={post.postDate} />)}
      {addToFriendsList.map(friend => friend.posts.map((post => <Post avatar={friend.avatar} name={friend.firstName + " " + friend.lastName + "."} postTitle={post.postTitle} postContent={post.postBody} postDate={post.postDate} />)))}
    </div>
  )
}

export default PostsContainer