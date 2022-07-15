import React from 'react'

function Post({avatar, name, postContent, postTitle, postDate}){

    return(
        <div className="profile-post">
            <div className='row'>
                <div className='col-md-2'>
                    <img src={avatar} className="post-avatar" alt={name} />

                </div>
                <div className='col-md-10'>
                    <h4>{postTitle}</h4>
                    <p className="post-sub">
                        Posted by: {name}<br />
                        <small>{postDate}</small>
                    </p>
                    <p>{postContent}</p>
                </div>
            </div>
        </div>
    )

}

export default Post