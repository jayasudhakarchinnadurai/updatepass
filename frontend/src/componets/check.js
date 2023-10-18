import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Check({upemail,setupemail}){
    const navigate = useNavigate();
    const [updatepass,setupdatepass]=useState("");
    const update =async(e)=>{
        const token = sessionStorage.getItem('token')
        const upedit ={
           email: upemail,
           password:updatepass
           }
           try {
            const response = await fetch("https://editpassword.onrender.com/api/edit",{
                      method:"PATCH",
                      body:JSON.stringify(upedit),
                      headers:{
                          "Content-Type":"application/json",
                           Authorization: `Bearer ${token}`
                      }
          
                  })
                  const data = await response.json();
                   if (data.message === "token expried"){
                    toast.error(data.message)
                    sessionStorage.clear()
                    navigate("/")
                 }else if(data.message === 'update succesfull') {
                    toast.success(data.message)
                    sessionStorage.clear()
                    navigate("/")

              } else{
                    toast.error(data.message)
                   }
                  
              } catch (error) {
                toast.error(error) 
              }
                  
          
              }
              
          
              
    
        
    return(
        <div>
        <div className='form-container'>
          <Form>
         <Form.Group  controlId="formBasicPassword">
        <Form.Label className='pass' >password</Form.Label>
        <Form.Control  type="password" placeholder="password"  onChange={(e)=>setupdatepass(e.target.value)} />
        </Form.Group><br></br><br></br>
        <Button variant="primary"  onClick={update} className="login-btn" >
        Login
         </Button>

         </Form>
        </div>
        </div>
    )
}
export default Check;







