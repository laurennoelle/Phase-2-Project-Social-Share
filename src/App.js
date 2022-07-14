import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import './App.css';
import SearchBar from './components/SearchBar';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div className="App">
      <SearchBar placeholder="Find a Friend" users={users} />
      <Header />
    </div>
  );
}

export default App;
