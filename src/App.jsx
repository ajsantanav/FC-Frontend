import React, { useState } from "react";
import Landing from "./pages/Landing";
import AuthForm from "./components/AuthForm";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import CharacterForm from "./components/CharacterForm";

function App() {

  return (
    <>
    <Navbar/>
    <Profile/>
    {/* <CharacterForm/> */}
    {/* <AuthForm />
    <Landing /> */}
    </>
  );
}

export default App;
