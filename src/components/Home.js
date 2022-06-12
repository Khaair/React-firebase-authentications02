import { useState,useEffect } from "react";
import UserDataService from "../services/user.services"


 function Home({id,setUserId}) {
  const [title,setTitle]=useState('');
  const [descriptions,setDescriptions]=useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newBook = {
    
        title,
        descriptions
    };
    console.log(newBook);

    try {
    
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newBook);
        setUserId("");
      } else {
        await UserDataService.addUsers(newBook);
        
      }

      
    } catch (err) {
      console.log(err)
    }

  
  };  


  const editHandler = async () => {
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setDescriptions(docSnap.data().descriptions);
    } catch (err) {
    }
  };


  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return(
    <div className='container'>
    <form action="">
  
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter Title</label>
        <input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}  style={{margin:"12px"}} placeholder="Enter email"/>
        </div>
        
        <div className="form-group">
  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
  <textarea className="form-control" value={descriptions} onChange={(e)=>setDescriptions(e.target.value)} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>

        <button className="btn btn-primary mt-3" type="button" onClick={handleSubmit} >Save</button>
    </form>

    </div>
  )
}

export default Home