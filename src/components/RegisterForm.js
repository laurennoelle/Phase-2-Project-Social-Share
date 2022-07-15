import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { registerUserEmail, registerUserUsername, registerUserPassword, registerUserFirstName, registerUserLastName, registerUserMonth, registerUserDay, registerUserYear, registerUserAvatar, database, currentUser, currentUserObject, isUserLoggedIn  } from '../atoms'

const yearOptions = [];
const dayOptions = [];

for(let i=1900; i<=2022;i++){
    yearOptions.push(i);
}
for(let i=1; i<=31;i++){
    dayOptions.push(i);
}

function RegisterForm(){

    const [userEmail, setUserEmail] = useRecoilState(registerUserEmail);
    const [userUsername, setUserUsername] = useRecoilState(registerUserUsername);
    const [userPassword, setUserPassword] = useRecoilState(registerUserPassword);
    const [userFirstName, setUserFirstName] = useRecoilState(registerUserFirstName);
    const [userLastName, setUserLastName] = useRecoilState(registerUserLastName);
    const [userMonth, setUserMonth] = useRecoilState(registerUserMonth);
    const [userDay, setUserDay] = useRecoilState(registerUserDay);
    const [userYear, setUserYear] = useRecoilState(registerUserYear);
    const [userAvatar, setUserAvatar] = useRecoilState(registerUserAvatar);
    const [databaseContents, setDatabaseContents] = useRecoilState(database);
    const [theUser, setTheUser] = useRecoilState(currentUser);
    const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);
    const [theUserObject, setTheUserObject] = useRecoilState(currentUserObject);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/users")
          .then((r) => r.json())
          .then((data) => setDatabaseContents(data));
          if(loggedIn === true){
            setTheUserObject(databaseContents.filter((user) => user.username === theUser));
            navigate('/ss');
          }
    }, [theUser])

    const createNewUser = (e) => {
        e.preventDefault();
        const filteredUsername = databaseContents.filter(theData => theData.username === userUsername.toLowerCase());
        const filteredEmail = databaseContents.filter(theData => theData.email === userEmail.toLowerCase());

        if(filteredUsername.length > 0){
            alert("Username already in use. Please use a different Username")
        }
        else if(filteredEmail.length > 0){
            alert("Email already in use. Please use a different Email Address")
        }
        else{
            const jsonData = {
                    "email": userEmail,
                    "username": userUsername,
                    "password": userPassword,
                    "firstName": userFirstName,
                    "lastName": userLastName,
                    "birthdayMonth": userMonth,
                    "birthdayDay": userDay,
                    "birthdayYear": userYear,
                    "avatar": userAvatar,
                    "friends": [],
                    "posts": []
                }

            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
            .then((r) => r.json())
            .then((data) => setTheUser(data.username))
            setLoggedIn(true);

        }
    }

    return(
        <div id="register-form">
            <div id="register-form-header">
            <h2>Register</h2>
            </div>        
            <form onSubmit={createNewUser}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label> 
                    <input id="email" name="email" type="text" className="form-control" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label> 
                    <input id="username" name="username" type="text" className="form-control" onChange={(e) => setUserUsername(e.target.value)} value={userUsername} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label> 
                    <input id="password" name="password" type="text" className="form-control" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label> 
                    <input id="firstname" name="firstname" type="text" className="form-control" onChange={(e) => setUserFirstName(e.target.value)} value={userFirstName} required />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Last Name</label> 
                    <input id="lastname" name="lastname" type="text" className="form-control" onChange={(e) => setUserLastName(e.target.value)} value={userLastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="bday">Birthday</label> 
                    <div>
                    <select id="bday-m" name="bday-m" className="custom-select" onChange={(e) => setUserMonth(e.target.value)} value={userMonth}>
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
                    <select id="bday-day" name="bday-day" className="custom-select" onChange={(e) => setUserDay(e.target.value)} value={userDay}>
                        { dayOptions.map((day) => <option value={day}>{day}</option>)}
                    </select>
                    <select id="bday-year" name="bday-year" className="custom-select" onChange={(e) => setUserYear(e.target.value)} value={userYear}>
                            { yearOptions.map((year) => <option value={year}>{year}</option>)}
                        
                    </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label htmlFor="text">Profile Image</label> 
                    <input id="profile-image" name="profile-image" type="text" className="form-control" onChange={(e) => setUserAvatar(e.target.value)} value={userAvatar} required />
                </div>                
                <div className="form-group">
                    <button name="submit" type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm