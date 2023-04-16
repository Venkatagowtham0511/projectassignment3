import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
function ThirdParty(){
    const [Dga, setDga] = useState([]);

    //Main function that is fetching the data from the 3rd party api and then getting the Json data that i have created 
    const Datagetterapi= () =>{
      //In below fetch it is the json data of the 3rd party api 
      fetch("https://lmvkg.wiremockapi.cloud/json/test").then(response => {
        return response.json();
      })
      .then(data1 => {
        setDga(data1)
      })
    }
    /*I have used Use Effect beacuse every time you start the react app the
        the Datagetterapi method is automatically called and the data from the api is automatically displayed
    */
    useEffect(() => {
      Datagetterapi();
    }, []);

    return(
        <>
          <div className="App">
            <header className="App-header">
            <Container>
            
            <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Major</th>
          <th>Undergraduation College</th>
          <th>Contact Information</th>
        </tr>
      </thead>
      <tbody>
      {Dga.map(test => (
            <tr key={test.id}>
              <td>{test.name}</td>
              <td>{test.Department}</td>
              <td>{test.College}</td>
              <td>{test.phone}</td>
              </tr>
          ))}
      </tbody>
      </table>
      </Container>
      </header>
    </div>  
        </>
    );
}

export default ThirdParty;