import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkMode, Home, Admin, Navbar} from "./components/index";

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <DarkMode/>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/admin" element={<Admin/>}/>

          </Routes>     
        </header>
      </div>
 

    </>
  );
}

export default App;
