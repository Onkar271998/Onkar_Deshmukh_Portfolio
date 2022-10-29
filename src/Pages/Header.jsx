import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";


const Header = ({ toggle }) => {
  return (                           
    <div className="Container">
      <Nav>
        <Logo to="/">
           <h1 style={{fontWeight:"500" ,fontSize:"1.5rm"  }} > Onkar Deshmukh</h1>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about" smooth={true} duration={50}>
            About
          </NavLink>
          <NavLink className="menu-item" to="skills" smooth={true} duration={50}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="projects" smooth={true} duration={50}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}duration={80}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1mXMZV2nfFqy62KGJqY4pqzucqozSby9_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume 
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
