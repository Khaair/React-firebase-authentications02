import UserDataService from "../services/user.services"
import React from 'react'

import { useEffect, useState } from "react";


function Viewdata({data,deleteHandler}) {



  return (
    <>
 
    <div className='container mt-5'>
    <div className="mb-2">
        {/* <button variant="dark edit" onClick={getUsers}>
          Refresh List
        </button> */}
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
          <th scope="col">Sl</th>
          <th scope="col">title</th>
          <th scope="col">Descriptions</th>
        
          <th scope="col">edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(datas)} */}

           {data.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <th scope="row">{index + 1}</th>
                <td>{doc.title}</td>
                <td>{doc.descriptions}</td>
                <td>
                {/* <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </button> */}
                
                 
                <button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )

          })}


        </tbody>
      </table>

    </div>
    </>
  )
}

export default Viewdata