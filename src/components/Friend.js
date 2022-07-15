import React from 'react';

function Friend({avatar, name, accepted, requestSent}){
    return (
        <div className="friend-wrapper">
            <div className="row">
                <div className='col-md-4'>
                    <img src={avatar} />
                </div>
                <div className='col-md-8'>
                    <div className="friend-list-right">
                        <div className="friend-list-name">
                            <b>{name}</b>
                        </div>
                        {/* accepted === false ? <> { 
                        requestSent === false ? <div><button className="btn btn-primary">Accept</button> <button className="btn btn-primary">X</button></div> : <div><button className="btn btn-primary">Cancel Request</button></div> 
                        } 
                    </> : <div><button onClick={} className="btn btn-primary">Remove Friend</button></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend