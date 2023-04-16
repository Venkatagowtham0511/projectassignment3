import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';
function Inventory() {
    const [id,setId]=useState("");
    const [pn,setPN]=useState("");
    const [qn,setQN]=useState("");
    const [dbim,setDBIM]=useState("");
    const [invdata, setinvdata]= useState([{
        pn: '',
        qn: '',
        dbim: '',

    }])
    const [list,setList]=useState([]);
    useEffect(() =>{

        Axios.get("http://localhost:3000/Inventory").then((response)=>{
            console.log(response.data.length);
            if(response.data.length === 0)
             alert("Inventory is Empty,Please Click on Stock Inventory");
            setList(response.data);
        });


        /*fetch("/http://localhost:3000/Inventory").then(res =>{
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setinvdata(jsonRes));*/
    },[]);
    const updateId=(Id,name,qty,image)=>{
        setId(Id);
        setPN(name);
        setQN(qty);
        setDBIM(image);
    }
    const updateInventory=()=>{
        Axios.put(`http://localhost:3000/UpdateInv/${id}`,{
            pn,
            qn,
            dbim,
        }).then((response)=>{
            alert("Item updated");
            Axios.get("http://localhost:3000/Inventory").then((response)=>{
                setList(response.data);
                setId("");
            });
        })
    }

    const deleteItem = (id) => {
        Axios.delete(`http://localhost:3000/test/${id}`).then((response)=>{
            alert("Item Deleted");
            Axios.get("http://localhost:3000/Inventory").then((response)=>{
                setList(response.data);
                setId("");
            });
        });
    }
    return(
    <Container><div>
    <table><thead>
    <tr>
      <th>Item Name</th>
      <th>Quantity</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {list.map((item)=>{
        return(
            <>
             <tr key={item.pn}>
        <td>{item.pn}</td>
        <td>{item.qn}</td>
        <td><img src={item.dbim} width="150"></img></td>
       <td> <Button onClick={()=>updateId(item._id,item.pn,item.qn,item.dbim)}>update</Button></td>
       <td><Button onClick={() => deleteItem(item._id)}>Delete</Button></td>
    </tr>
    {id === item._id && <div>
        <form>
        <label>
          Name:
          <input type="text" value={pn}  onChange={(event)=>{setPN(event.target.value)}} />
        </label>
        <label>
          Quantity:
          <input type="text" value={qn} onChange={(event)=>{setQN(event.target.value)}} />
        </label>
        <Button onClick={()=> updateInventory()}>Confirm changes</Button>
      </form> 
        </div>}
            </>
        )
    })}
  {/*invdata.map(Inv =>(
    <tr key={Inv.pn}>
        <td>{Inv.pn}</td>
        <td>{Inv.qn}</td>
        <td><img src={Inv.dbim} width="150"></img></td>
    </tr>
  ))*/}
  </tbody>
  </table>
</div></Container>)  
}

export default Inventory;