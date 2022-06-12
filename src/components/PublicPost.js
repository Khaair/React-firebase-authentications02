import React from "react";
import "./Publicpost.css";
import { Link } from "react-router-dom";

export default function PublicPost({ data }) {

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

          <div className="addtocartone">
            <div className="adddetails">
              {data.length &&
                data.map((doc,ind) => {
                  return (
                    <tr key={doc.id}>
                      <h3>{doc.title}</h3>
                      <p className="cartpdetails">{doc.descriptions}</p>
                     <Link to={`/edit/${ind}`}><button className="addcheckoutbtnn">Apply</button></Link> 
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
