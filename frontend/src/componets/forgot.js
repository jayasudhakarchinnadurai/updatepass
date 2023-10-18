import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { toast } from "react-toastify";

function Forgot(){
    const navigate = useNavigate();
    let [email,setlogemail]=useState("")
    let [password,setlogpass]=useState('')

    const login=async()=>{
     
        const loguser ={
            email,
            password
        }
       
        try {
            const response = await fetch("https://editpassword.onrender.com/api/check",{
              method:"POST",
              body:JSON.stringify(loguser),
              headers:{
                  "Content-Type":"application/json"
              }
          })
         const data = await response.json();
            if(data.message === "password wrong" ){
                toast.error(data.message)
              }else if(data.message === "login successfull"){
               toast.success(data.message)
               navigate("/login")
                
              }else{
                toast.error(data.message)
              }
              
        } catch (error) {
            toast.error(error)
        }
    }
    return(
<div >
    <button className="sig-btn" onClick={()=>navigate("/create")}>Sign up</button>
<h4 style={ {color:"blue"}}> Login Here</h4>
<div className='form-container'>
    
        <Form>
        <Form.Group  controlId="formBasicEmail">
        <Form.Label  className="email">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         onChange={(e)=>setlogemail(e.target.value)}/>
        </Form.Group><br></br>

       <Form.Group  controlId="formBasicPassword">
        <Form.Label  className="pass">password</Form.Label><br></br>
        <Form.Control  type="password" placeholder="password"  onChange={(e)=>setlogpass(e.target.value)} />
        </Form.Group><br></br>
        <Button variant="primary"  onClick={login} className="login-btn" >
        Login
         </Button><br></br><br></br>
         <a onClick={()=>navigate("/email")} className="forgot-click">Forgot Password?</a>
      </Form> 
    </div>
        
</div>
    )
}

export default Forgot;

