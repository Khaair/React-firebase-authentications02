import React from "react";
import { Route, Routes } from "react-router-dom";
import Deshboard from "./components/Deshboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SendData from "./components/Viewdata";
import Signup from "./components/Signup";
import Viewdata from "./components/Viewdata";
import { useEffect, useState } from "react";
import UserDataService from "./services/user.services";
import EasyApplyDataService from "./services/easyapply.services";

import PublicPost from "./components/PublicPost";
import Apply from "./components/Apply";
import ShowApply from "./components/ShowApply";
import SearchBar from "./components/SearchBar";
import AdminSidebar from "./components/AdminSidebar";

export default function App() {
  const [data, setData] = useState([]);
  const [applydata, setApplydata] = useState([]);

  useEffect(() => {
    getUsers();
    console.log(applydata, "applydata");
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };

  useEffect(() => {
    getEasyApplys();
  }, []);

  const getEasyApplys = async () => {
    const data = await EasyApplyDataService.getAllApplys();

    setApplydata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const easyapplydeleteHandler = async (id) => {
    await EasyApplyDataService.deleteEasyapply(id);
    getEasyApplys();
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Deshboard
              easyapplydeleteHandler={easyapplydeleteHandler}
              applydata={applydata}
            />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="showapply" element={<ShowApply />} />

          
          
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/viewdata"
          element={<Viewdata data={data} deleteHandler={deleteHandler} />}
        />
        <Route path="/publicpost" element={<PublicPost data={data} />} />
        <Route path="/edit/:id" element={<Apply data={data} />} />

        
      </Routes>
    </div>
  );
}
