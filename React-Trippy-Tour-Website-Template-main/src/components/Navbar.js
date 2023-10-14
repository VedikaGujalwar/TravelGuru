import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {clicked : false};
  handleclick=() =>{
    this.setState({clicked: !this.state.clicked})
  }
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1>
          <nav className="navbar-logo">TravelGuru</nav>
        </h1>
        <div className="menu-icon" onClick={this.handleclick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? 
          ".nav-menu active" : "nav-menu" }>
          {
            MenuItems.map((items,index) =>{
              return(
                <li key={index}>
            <Link className={items.cName} to ={items.url} >
          <i className ={items.icon}></i>
           {items.title}
          </Link>
          </li>
            )
            })}
            <button> Sign Up </button>
            <button>Log In</button>
          

        </ul>
      </nav>
    );
  }
}

export default Navbar;
