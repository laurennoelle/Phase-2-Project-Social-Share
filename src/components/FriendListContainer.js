import React from 'react';
import Friend from './Friend';
import { useRecoilState } from 'recoil'
import { currentUserObject, database } from '../atoms'

function FriendListContainer() {
  
  const [theUserObject, setTheUserObject] = useRecoilState(currentUserObject);
  const [databaseContents, setDatabaseContents] = useRecoilState(database);

  return (
    <div id="friends-container">
      {theUserObject.friends.map((friend) => <Friend avatar={friend.avatar} name={friend.firstName + " " + friend.lastName.charAt(0) + "."} accepted={friend.currentFriend} requestSent={friend.requestSent} />)}
    </div>
  )
}

export default FriendListContainer