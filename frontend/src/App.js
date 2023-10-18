import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Forgot from './componets/forgot.js';
import Login from './componets/login.js';
import Email from './componets/updatepass';
import { useState } from 'react';
import Check from './componets/check';
import Createuser from './componets/create.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[upemail,setupemail]=useState("");
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Forgot/>}/>
         <Route path='/create' element={<Createuser/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/email' element={<Email upemail={upemail}setupemail={setupemail}/>}/>
           <Route path='check' element={<Check  upemail={upemail}setupemail={setupemail}/>}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
