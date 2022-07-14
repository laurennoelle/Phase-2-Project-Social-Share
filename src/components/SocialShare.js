import React from 'react';
import Header from './Header';
import FriendListContainer from './FriendListContainer';
import PostsContainer from './PostsContainer';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react';

function SocialShare(){

    const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);

    const navigate = useNavigate();

    console.log(loggedIn)

    useEffect(() => {
        if(loggedIn === false){
            navigate('/');
        }
    }, [])

    return (
        <div className="main-container-ss">
            <Header />
            <div className="container">
                <div className="row">
                    <div id="ss-top-left" className='col-md-4'>
                        <img id="avatar-img" src={require("../images/male-default-avatar.png")} />
                        <a href="#">Edit Profile</a>
                    </div>
                    <div id="ss-top-right" className='col-md-8'>
                        <div id="ss-name">
                            <h1>{"Christopher Babb"}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="ss-bottom-left" className='col-md-4'>
                        <h4>Friends</h4>
                        <FriendListContainer />
                    </div>
                    <div id="ss-bottom-right" className='col-md-8'>
                        <h4>Posts</h4>
                        <button id="new-post-button" className='btn btn-primary'>New Post</button>
                        <PostsContainer />
                    </div>
                </div>                
            </div>
            
        </div>
    )

}

export default SocialShare