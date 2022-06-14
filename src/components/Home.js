import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/user.services";
import "./Home.css";

function Home({ id, setUserId }) {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      descriptions,
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
      console.log(err);
    }
  };

  const editHandler = async () => {
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setDescriptions(docSnap.data().descriptions);
    } catch (err) {}
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <div className="containerr">
      <div>
        <div className="div1">
          <div className="adcontainer">
            <h2 style={{ color: "#00156A", fontWeight: "bold" }}>
              Post New Job
            </h2>
            <hr></hr>
            <form>
              <label className="name">Enter Job Title</label>
              <br />
              <input
              className="textt"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ margin: "12px" }}
                placeholder="Job Title"
              />
              <br />

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Enter Job Descriptions
                </label>
                <textarea
                  className="form-control"
                  value={descriptions}
                  onChange={(e) => setDescriptions(e.target.value)}
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>

              <button
                className="adminloginbtn"
                type="button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
