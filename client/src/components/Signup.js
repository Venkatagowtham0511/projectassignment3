import Navbars from 'react-bootstrap/Navbar';
import icon from './icon.PNG';
import pp from './pp.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Signup(){
    const [spi, setspi]= useState({
        uname: '',
        snum: '',
        clg:'',
        psw:'',
      })
      function handleChange(event){

        const {name, value}=event.target;
    
        setspi(data =>{
          return {
            ...data,
            [name]:value
          }
        })
    }
      function handleClick(event){
        event.preventDefault();
        const newsignup ={
          uname: spi.uname,
          snum: spi.snum,
          clg: spi.clg,
          psw: spi.clg,
        }
        console.log(newsignup);
        axios.post('http://localhost:3000/test', newsignup);
    }



    return(
        <div className="App">
        <header className="App-header">
         
          <Container fluid style={{ paddingTop: 100 }}>
          <Form >
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label> Username: </Form.Label>
                  <input type="text" placeholder="Enter username" id="uname" name="uname" onChange={handleChange}    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label> Phone number </Form.Label>
                  <input type="number" placeholder="Enter  Number" id="snum" name="snum"onChange={handleChange}   />

                </Form.Group>
                <Form.Group className="mb-3" controlId="collage">
                  <Form.Label> Collage </Form.Label>
                  <input type="text" placeholder="Enter  collage" id="clg" name="clg"onChange={handleChange}  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label> Password </Form.Label>
                  <input type="text" placeholder="Enter  password" id="psw" name="psw" onChange={handleChange}  />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                  Submit
                </Button>
                <Form.Group>
                </Form.Group>
              </Form>
          </Container>
          </header>
          </div>
    );
}