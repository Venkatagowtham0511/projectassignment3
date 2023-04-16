import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Axios from 'axios';
function Userdata(){
    const [uname,setUname]=useState("");
    const [psw,setPsw]=useState("");
    const [clg,setClg]=useState("");
    const [snum,setSnum]=useState("");
    useEffect(()=>{
        if(localStorage.getItem("value")){
            Axios.get(`http://localhost:3000/getUser/${localStorage.getItem("value")}`).then((response)=>{
            setUname(response.data.uname);
            setPsw(response.data.psw);
            setClg(response.data.clg);
            setSnum(response.data.snum);
            })
        }
    },[]);
    return(<>
        {<h1>User Data:</h1>}
        {<h3>Username : {uname}</h3>}
        {<h3>College:{clg}</h3>}
    </>);
}

export default Userdata;