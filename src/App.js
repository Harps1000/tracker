import React from 'react';
import Students from "./components/Students"
import Header from "./components/Header"
import { Router } from "@reach/router"
import Nav from "./components/NavBar"
import IStudents from "./components/iStudent"

function App() {


  return (
    <div className="App">
    <Header/>
<Nav/>
<Router>
<Students path ="/students"/>
</Router>
<Router>
<IStudents path ="/students/:id"/>
</Router>
  </div>
  );



}

export default App;
