
import {Link} from 'react-router-dom';
import icon from './icon.PNG';
import {useNavigate} from "react-router-dom";
function Navbar(){
    let Navigate=useNavigate();
    const logout=()=>{
        alert("logout successful");
        localStorage.removeItem("value");
        Navigate("/");
        window.location.reload();
    }
    return(
        <div>
            <nav className="navbar bg-black container">
                <Link to="/">
                <h4><a href="/">Home</a></h4>
                </Link>
                <Link to="/Inventory">
                <h4><a href="/Inventory">Inventory</a></h4>
                </Link>
                <Link to="/AddItem">
                <h4><a href="/AddItem"> Stock Inventory</a></h4>
                </Link>
                <Link to="/ThirdParty">
                <h4><a href="/ThirdParty">ThirdParty Api Data</a></h4>
                </Link>
                {/*<Link to="/Signup">
                <h4><a href="/Signup">Signup</a></h4>
                </Link> */}
               { !localStorage.getItem("value")&&<Link to="/Signup1">
                <h4><a href="/Signup1">Signup</a></h4>
                </Link> }
               {!localStorage.getItem("value") && <Link to="/Login">
                <h4><a href="/Login">Login</a></h4>
                </Link> }
                {localStorage.getItem("value") && <Link to="/" onClick={logout}>
                <h4><a href="/">Logout</a></h4>
                </Link> }
                {localStorage.getItem("value") && <Link to="/userData" >
                <h4><a href="/userData">userdata</a></h4>
                </Link> }
        </nav>
        </div>
    );
}

export default Navbar;