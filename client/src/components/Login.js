import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';
import {Link} from 'react-router-dom';
function Login(){
    const [uname,setUname]=useState("");
    const [psw,setPsw]=useState("");
    let Navigate=useNavigate();
   // const [clg,setClg]=useState("");
   // const [snum,setSnum]=useState("");
    const  loginUser=()=>{
        Axios.post(`http://localhost:3000/loginUser`,{
            uname,
            psw,
        }).then((response)=>{
            //alert("user signup done");
            if(response.data==="InvalidUsername")
                alert("User name not found");
           else if(response.data==="InvalidPassword")
                alert("Password  is Wrong");
            else{
                localStorage.setItem("value",response.data);
                alert("Login Successful");
                window.location.reload();
               // sleep(2000);
                //Navigate("/userData");

                
            }
        });
      }
    
    return(
        <>
         <div className="App">
        <header className="App-header">
         
          <Container fluid style={{ paddingTop: 100 }}>
          <Form >
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label> Username: </Form.Label>
                  <input type="text" placeholder="Enter username" id="uname" name="uname" onChange={(event)=>{setUname(event.target.value)}}    />

                </Form.Group>
                
               
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label> Password </Form.Label>
                  <input type="password" placeholder="Enter  password" id="psw" name="psw" onChange={(event)=>{setPsw(event.target.value)}}  />

                </Form.Group>
                <Button variant='primary'  onClick={()=>loginUser()}>Login user</Button>
                
               
                {localStorage.getItem("value") && <Link to='/userData' className='ms-3'><Button variant="primary" >
                UserData
                </Button></Link>  }
                
                <Form.Group>
                </Form.Group>
              </Form>
          </Container>
          
          </header>
          </div>
        </>
    );
}

export default Login;