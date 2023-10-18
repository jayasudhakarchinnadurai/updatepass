import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Email({upemail,setupemail}){
    const navigate = useNavigate();
    const check=async()=>{
    const getmail={
        email:upemail
    }
    try {
  const response = await fetch("https://editpassword.onrender.com/api/email",{
            method:"POST",
            body:JSON.stringify(getmail),
            headers:{
                "Content-Type":"application/json"
            }

        })
        const data = await response.json();
        
       if(data.message === 'fetch successfull') {
        toast.success(data.message)
           navigate("/check")
         
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
        <Form.Group  controlId="formBasicEmail">
        <Form.Label >Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         onChange={(e)=>setupemail(e.target.value)} value={upemail}/>
        </Form.Group><br></br><br></br>

        <Button variant="primary"  onClick={check} className="login-btn" >
        sumbmit

         </Button>
       
      </Form> 
    </div>
        </div>
    )
} 

export default Email