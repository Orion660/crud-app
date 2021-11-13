import React, { useState, useEffect } from "react";
import UserInput from "./component/UserInput";
import UserList from "./component/UserList";
import "./App.css";
import { connect } from "react-redux";
import { getAllUsers } from "./actions/userActions";

function App(props) {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
     props.getAllUsers()
  }, [])

  return (
    <>
      <div className="App">
        <div className="container">
          <UserInput />
          <UserList />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
    getAllUsers
}

export default connect(null, mapDispatchToProps)(App);
