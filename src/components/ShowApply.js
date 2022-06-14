import UserDataService from "../services/user.services"
import React from 'react'
import "./ShowApply.css";


import { useEffect, useState } from "react";


function ShowApply({applydata,easyapplydeleteHandler}) {

    console.log(applydata,"showapply")

  return (
    <>
 
    <div className='containerr'>
    <div className="mb-2">
        {/* <button variant="dark edit" onClick={getUsers}>
          Refresh List
        </button> */}
      </div>
      <h1>All Submitted Applications</h1>
      <table className="table table-dark tbl">
        <thead>
          <tr>
          <th scope="col">Sl</th>
          <th scope="col">title</th>
          <th scope="col">Full Name</th>
          <th scope="col">Father Name</th>
          <th scope="col">Educational Institution</th>
          <th scope="col">Subject Name</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>





        
          <th scope="col">edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(datas)} */}

           {applydata.length && applydata.map((doc, index) => {
            return (
                
              <tr key={doc.id}>
                <th scope="row">{index + 1}</th>
                <td>{doc.title}</td>
                <td>{doc.fullname}</td> 
                <td>{doc.fathername}</td>
                <td>{doc.educationalinstitute}</td>
                <td>{doc.subjectname}</td>
                <td>{doc.email}</td>
                <td>{doc.mobilenumber}</td>
                


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
                    onClick={(e) => easyapplydeleteHandler(doc.id)}
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

export default ShowApply