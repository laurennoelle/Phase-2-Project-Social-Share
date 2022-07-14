import React, { useState } from 'react'
import "./SearchBar.css";
import {FaSearch, FaTimes} from "react-icons/fa";


function SearchBar( {placeholder, users} ) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = users.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase() || value.firstName.toLowerCase().includes(searchWord.toLowerCase()));
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }  
  };
  
    function clearInput() {
      setFilteredData([]);
      setWordEntered("")
    }

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={wordEntered} 
          onChange={handleFilter} />
        <div className="searchIcon"> 
          {filteredData.length === 0 ? (
            <FaSearch /> 
          ):( 
            <FaTimes id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
      <div className="dataResult">
        {filteredData.map((value, key) => {
          return (
          <a className='dataItem'> 
            <p>{value.firstName} {value.lastName.charAt(0)}</p>
            <button>Add Friend</button>
          </a>
        );
        })}
      </div>
    )}
    </div>
  );
}

export default SearchBar