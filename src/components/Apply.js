import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Apply.css'
import EasyApplyDataService from "../services/easyapply.services"




export default function Apply({data}) { 
    const [title,setTitle]= useState("")
    const [fullname,setFullname]= useState("")
    const [fathername,setFathername]= useState("")
    const [educationalinstitute,setEducationalinstitute]= useState("")

    const [subjectname,setSubjectname]= useState("")

    const [email,setEmail]= useState("")

    const [mobilenumber,setMobilenumber]= useState("")

    const [permanentaddress,setPermanentaddress]= useState("")
    const [presentaddress,setPresentaddress]= useState("")
    const [skill,setSkill]= useState("")




   
    

    let {id} =useParams();


    console.log(data[id],"apply")

    useEffect(()=>{
        let element=data[id];
        setTitle(element.title);

        console.log(element,"element")
    
     },[id])

     



     const handleSubmit = async (e) => {
        e.preventDefault();
        
      
    const newApply = {
        title,
        fullname,
        fathername,
        educationalinstitute,
        subjectname,
        email,
        mobilenumber,
        permanentaddress,
        presentaddress,
        skill
     }
    
        try {
        
        
            await EasyApplyDataService.addApplys(newApply);
            
                  
        } catch (err) {
          console.log(err)
        }
    
      
      }; 


  return (
    <>
    <div>
      <div className="div1">
        
          <div className="lcontainer">
            <h3 style={{color:'#00156A',fontWeight:'bold'}}>Easy Apply</h3>
            <h4 style={{color:'#00156A',fontWeight:'bold'}}>Job Post Name: <span style={{color:'red',fontWeight:'bold'}}>{title}</span></h4>

            <hr></hr>
            <form>
              <label className="name">Enter Full Name</label>
              <br />
              <input className="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" name placeholder="Enter Full Name" />
              <br />

              <label className="name">Enter Father Name</label>
              <br />
              <input className="text" value={fathername} onChange={(e)=>setFathername(e.target.value)} type="text" name placeholder="Enter Father Name" />
              <br />

              <label className="name">Educational Institute</label>
              <br />
              <input className="text" value={educationalinstitute} onChange={(e)=>setEducationalinstitute(e.target.value)} type="text" name placeholder="Educational Institute" />
              <br />

              <label className="name" >Subject Name</label>
              <br />
              <input className="text" value={subjectname} onChange={(e)=>setSubjectname(e.target.value)} type="text" name placeholder="Subject Name" />
              <br />

              <label className="name">Enter Email</label>
              <br />
              <input className="text" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name placeholder="Enter Email" />
              <br />

              <label className="name">Enter Mobile Number</label>
              <br />
              <input className="text" value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)} type="text" name placeholder="Enter Mobile Number" />
              <br />

              <label className="name">Permanent Address</label>
              <br />
              <input className="text" value={permanentaddress} onChange={(e)=>setPermanentaddress(e.target.value)} type="text" name placeholder="Permanent Address" />
              <br />

              <label className="name">Present Address</label>
              <br />
              <input className="text" value={presentaddress} onChange={(e)=>setPresentaddress(e.target.value)} type="text" name placeholder="Present Address" />
              <br />

              <label className="name">Skill</label>
              <br />
              <input className="text" value={skill} onChange={(e)=>setSkill(e.target.value)} type="text" name placeholder="Skill" />
              <br />
             

              <Link to="/"><button onClick={handleSubmit} className="loginbtnn">Submit</button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
