import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Teacher from "./pages/Teacher";
import Manager from "./pages/Manager";
import Employee from "./pages/Employee";
import Administrator from "./pages/Administrator";
import Director from "./pages/Director";
import Proxy from "./Proxy";
const App = () => {
  let [user, setUser] = useState({
    "id": 1,
    "username": "Zaki",
    "email": "l215290@teacher.com",
    "password": "sheeda1289"
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route
          path="teacher"
          element={
            <Proxy user={user} identifier={"teacher"}>
              <Teacher user={user} />
            </Proxy>

          }
        />
        <Route
          path="manager"
          element={
            <Proxy user={user} identifier={"manager"}>
              <Manager user={user} />
            </Proxy>
          }
        />
        <Route
          path="employee"
          element={
            <Proxy user={user} identifier={"employee"}>
              <Employee user={user} />
            </Proxy>
          }
        />
        <Route
          path="administrator"
          element={
            <Proxy user={user} identifier={"administrator"}>
              <Administrator user={user} />
            </Proxy>
          }
        />
        <Route
          path="director"
          element={
            <Proxy user={user} identifier={"director"}>
              <Director user={user} />
            </Proxy>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
