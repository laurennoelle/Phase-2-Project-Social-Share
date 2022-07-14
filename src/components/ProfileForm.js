import React from 'react';

const yearOptions = [];
const dayOptions = [];

for(let i=1900; i<=2022;i++){
    yearOptions.push(i);
}
for(let i=1; i<=31;i++){
    dayOptions.push(i);
}

function ProfileForm(){
    return(
        <div id="profile-form">
            <div id="profile-form-header">
            <h2>Edit Profile</h2>
            </div>        
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label> 
                    <input id="email" name="email" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label> 
                    <input id="username" name="username" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label> 
                    <input id="firstname" name="firstname" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Last Name</label> 
                    <input id="lastname" name="lastname" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="bday">Birthday</label> 
                    <div>
                    <select id="bday-m" name="bday-m" className="custom-select">
                        <option value="jan">Jan</option>
                        <option value="feb">Feb</option>
                        <option value="mar">Mar</option>
                        <option value="apr">Apr</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="aug">Aug</option>
                        <option value="sept">Sept</option>
                        <option value="oct">Oct</option>
                        <option value="nov">Nov</option>
                        <option value="dec">Dec</option>
                    </select>
                    <select id="bday-day" name="bday-day" className="custom-select">
                        { dayOptions.map((day) => <option value={day}>{day}</option>)}
                    </select>
                    <select id="bday-year" name="bday-year" className="custom-select">
                            { yearOptions.map((year) => <option value={year}>{year}</option>)}
                        
                    </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label htmlFor="text">Profile Image</label> 
                    <input id="profile-image" name="profile-image" type="text" className="form-control" />
                </div>                
                <div className="form-group">
                    <button name="submit" type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default ProfileForm