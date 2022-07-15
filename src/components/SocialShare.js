import React, { useEffect } from 'react';
import Header from './Header';
import FriendListContainer from './FriendListContainer';
import PostsContainer from './PostsContainer';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import Popup from 'reactjs-popup';
import { isUserLoggedIn, currentUserObject, currentUser, makeNewPostTitle, makeNewPostContent, makeNewFriend, database } from '../atoms'


function SocialShare(){

    const [databaseContents, setDatabaseContents] = useRecoilState(database);
    const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);
    const [theUserObject, setTheUserObject] = useRecoilState(currentUserObject);
    const [theUser, setTheUser] = useRecoilState(currentUser);
    const [postTitle, setPostTitle] = useRecoilState(makeNewPostTitle);
    const [postContent, setPostContent] = useRecoilState(makeNewPostContent);
    const [friendUsername, setFriendUsername] = useRecoilState(makeNewFriend);

    const navigate = useNavigate();

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;        

    if(loggedIn === false){
        navigate('/');
    }

    const currentPosts = theUserObject.posts.map(post => post);
    const currentFriends = theUserObject.friends.map(friend => friend);

    function createNewPost(e){
        e.preventDefault();
        currentPosts.push({
            "postTitle": postTitle,
            "postBody": postContent,
            "postDate": date
        })
        const jsonData = {
            "posts": currentPosts
        }

        fetch(`http://localhost:3001/users/${theUserObject.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
            })
          .then((r) => r.json())
          .then((data) => setTheUserObject(data));
    }

    function addNewFriend(e){
        e.preventDefault();

        const dataForFriend = databaseContents.filter((user) => friendUsername === user.username)

        let myCurrentFriends = [...theUserObject.friends];

        console.log(myCurrentFriends)

        if(dataForFriend.length > 0){
            let friendsFriends = [...dataForFriend[0].friends];
            friendsFriends.push({
                "username": theUserObject.username,
                "firstName": theUserObject.firstName,
                "lastName": theUserObject.lastName,
                "avatar": theUserObject.avatar,
                "currentFriend": true
            })

            let jsonData = {
                "friends": friendsFriends
            }
            console.log(jsonData)

            fetch(`http://localhost:3001/users/${dataForFriend[0].id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
                })
            .then((r) => r.json())
            .then((data) => console.log(data));

            myCurrentFriends.push({
                "username": dataForFriend[0].username,
                "firstName": dataForFriend[0].firstName,
                "lastName": dataForFriend[0].lastName,
                "avatar": dataForFriend[0].avatar,
                "currentFriend": true
            })

            jsonData = {
                "friends": myCurrentFriends
            }
            console.log(jsonData)

            fetch(`http://localhost:3001/users/${theUserObject.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
                })
            .then((r) => r.json())
            .then((data) => setTheUserObject(data));


        }
        else{
            alert("Friend not found")
        }
    }

    return (
        <div className="main-container-ss">
            <Header />
            <div className="container">
                <div className="row">
                    <div id="ss-top-left" className='col-md-4'>
                        <img id="avatar-img" src={theUserObject.avatar} />
                        <a href="#">Edit Profile</a>
                    </div>
                    <div id="ss-top-right" className='col-md-8'>
                        <div id="ss-name">
                            <h1>{theUserObject.firstName} {theUserObject.lastName}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="ss-bottom-left" className='col-md-4'>
                        <h4>Friends</h4>
                        <Popup trigger={<button id="new-post-button" className="btn btn-primary">Add Friend</button>} modal>
                            <div id="popup-contents">
                                <form onSubmit={addNewFriend}>
                                    <div className="form-group">
                                        <label htmlFor="post-title">Friend's Username</label> 
                                        <input id="title" name="title" type="text" className="form-control" onChange={(e) => setFriendUsername(e.target.value)} value={friendUsername} required />
                                    </div>
                                    <div className="form-group">
                                        <button name="submit" type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </Popup>
                        <FriendListContainer />
                    </div>
                    <div id="ss-bottom-right" className='col-md-8'>
                        <h4>Posts</h4>
                        <Popup trigger={<button id="new-post-button" className="btn btn-primary">New Post</button>} modal>
                            <div id="popup-contents">
                                <form onSubmit={createNewPost}>
                                    <div className="form-group">
                                        <label htmlFor="post-title">Post Title</label> 
                                        <input id="title" name="title" type="text" className="form-control" onChange={(e) => setPostTitle(e.target.value)} value={postTitle} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="post-content">Post Content</label> 
                                        <textarea id="content" name="content" className="form-control" onChange={(e) => setPostContent(e.target.value)} value={postContent} required />
                                    </div>
                                    <div className="form-group">
                                        <button name="submit" type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </Popup>
                        <PostsContainer />
                    </div>
                </div>                
            </div>
            
            
        </div>
    )

}

export default SocialShare