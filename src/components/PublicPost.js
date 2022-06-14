import React,{useState} from "react";
import "./Publicpost.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function PublicPost({ data }) {


  const [searchdata,setSearchdata] = useState("")

  console.log(data,"public post")
  return (
    <div>
      <div className="div1">
        <div className="Addcontainer">
          <div className="titlee">
            <h2>All Job Post</h2>
            {/* <Link to="/">
              <button className="addbtnn">Continue Shoping</button>
            </Link> */}
          </div> 
          <div className="searchinput">
          <SearchBar data = {data}/>

          </div>

          <div className="addtocartone">
            <div className="adddetails">
              {data.length &&
                data.map((doc,ind) => {
                  return (
                    <tr key={doc.id}>
                      <h3>{doc.title}</h3>
                      <p className="cartpdetails">{doc.descriptions}</p>
                     <Link to={`/edit/${doc.id}`}><button className="addcheckoutbtnn">Apply</button></Link>
                    </tr>
                  );
                })}
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
