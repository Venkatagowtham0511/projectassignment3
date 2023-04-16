import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Axios from 'axios';
function Signup1(){
    const [uname,setUname]=useState("");
    const [psw,setPsw]=useState("");
    const [clg,setClg]=useState("");
    const [snum,setSnum]=useState("");
    const addUser=()=>{
        Axios.post(`http://localhost:3000/addUser`,{
            uname,
            snum,
            clg,
            psw,
        }).then((response)=>{
            alert("user signup done");
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
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label> Phone number </Form.Label>
                  <input type="number" placeholder="Enter  Number" id="snum" name="snum"onChange={(event)=>{setSnum(event.target.value)}}   />

                </Form.Group>
                <Form.Group className="mb-3" controlId="collage">
                  <Form.Label> Collage </Form.Label>
                  <input type="text" placeholder="Enter  collage" id="clg" name="clg"onChange={(event)=>{setClg(event.target.value)}}  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label> Password </Form.Label>
                  <input type="text" placeholder="Enter  password" id="psw" name="psw" onChange={(event)=>{setPsw(event.target.value)}}  />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUser}>
                  Submit
                </Button>
                <Form.Group>
                </Form.Group>
              </Form>
          </Container>
          </header>
          </div>
        </>
    );
}

export default Signup1;