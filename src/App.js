import Header from './components/Header';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { database, isUserLoggedIn } from './atoms'
import { useNavigate } from 'react-router-dom'


function App() {

  const [databaseContents, setDatabaseContents] = useRecoilState(database);
  const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn === true){
        navigate('/ss');
    }
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((r) => r.json())
      .then((data) => setDatabaseContents(data));
  }, [])

  return (
    <div className="App">
        <Header />
        <Login />
        <footer>
      </footer>
    </div>
  );
}

export default App;
