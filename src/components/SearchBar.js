import React, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";



function SearchBar({ placeholder, data }) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  console.log(filteredData,"search")

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="inputsearch"
          placeholder="Search job here.."
          value={wordEntered}
          onChange={handleFilter}
        />
     
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
               <>
               <div className="searchres">
               <h3>{value.title} </h3>
                <p>{value.descriptions}</p>
                <Link to={`/edit/${value.id}`}><button className="addcheckoutbtnn">Apply</button></Link>
               </div>
                
               </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
