import React from 'react';
import Friend from './Friend';

function FriendListContainer() {
  return (
    <div id="friends-container">
      <Friend name={"Chris B."} accepted={false} requestSent={false} />
      <Friend name={"Lauren L."} accepted={true} requestSent={false}/>
      <Friend name={"Roger M."} accepted={false} requestSent={true}/>
    </div>
  )
}

export default FriendListContainer