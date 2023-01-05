import React from "react";
import Navbar from "./component/navbar";
import { Route, Routes}  from 'react-router-dom';
import Home from './component/Home';
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import AllUsers from "./component/AllUsers";

const App = () =>{
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route exact  path="/"      element ={ <Home/>}/>
        <Route   path="/edituser"   element = { <EditUser/> } />
        <Route path="/adduser"      element ={ <AddUser/>} />
        <Route path="/alldata"     element ={ <AllUsers/>} />
      </Routes>
    </div>
  );



}

export default App;