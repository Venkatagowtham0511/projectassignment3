import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
function AddItem() {
    const [gpi, setgpi]= useState({
        pn: '',
        qn: '',
      })
      const[image,setImage]=useState("");
      const[iul,setIUL]=useState("");
    const uploadImage=()=>{
      const formData=new FormData();
      formData.append("file",image);
      formData.append("upload_preset","v2q4a1uw");
      console.log("image");
      axios.post("https://api.cloudinary.com/v1_1/db7lann3y/image/upload",formData).then((response)=>{
        console.log(response.data.secure_url);
        setIUL(response.data.secure_url);
      });
    }
    function handlechange(event){

        const {name, value}=event.target;
    
        setgpi(data =>{
          return {
            ...data,
            [name]:value
          }
        })
        
      }
      function handleClick(event){
        event.preventDefault();
        const newinv ={
          pn: gpi.pn,
          qn: gpi.qn,
          dbim: iul
        }
        console.log(newinv);
        axios.post('http://54.173.224.56:3000/create', newinv);
        alert("Item added Successfully");
      }
    


    return (<div className="App">
    <header className="App-header">
      <Container fluid style={{ paddingLeft: 500 }}>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="productname">
                <Form.Label> Name:  </Form.Label>
                <input type="text" placeholder="Enter product name" onChange={handlechange} id="Pn" name="pn" value={gpi.pn}  />

              </Form.Group>
              <Form.Group className="mb-3" controlId="quantity">
                <Form.Label> Quantity: </Form.Label>
                <input type="number" placeholder="Enter Quantity" onChange={handlechange} id="qn" name="qn" value={gpi.qn}  />

              </Form.Group>
              <Form.Group className="mb-3" controlId="imageupload">
                <Form.Label>Image Upload:</Form.Label>
                <input type="file" id="itemimg" name="itemimg" onChange={(event)=>{setImage(event.target.files[0]);}} />
                <Button onClick={uploadImage}>Upload I</Button>
              </Form.Group>
              <Button variant="primary" onClick={handleClick} >Store</Button>
            </Form>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </header>
  </div>
  );
}

export default AddItem;