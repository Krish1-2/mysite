import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import Time from "./time";
	

const Navbar = () => {
return (
	<>
    <div className="space"></div>
	<Nav>
	<div className="time"><Time/></div>
		<NavMenu>
		<NavLink to="/" activeStyle>
         HOME
		</NavLink>
		{/* <NavLink to="/achivements" activeStyle>
         ACHIVEMENTS
		</NavLink> */}
		<NavLink to="/contact" activeStyle>
			CONTACT
		</NavLink>
		<NavLink to="/education" activeStyle>
			EDUCATION
		</NavLink>
		<NavLink to="/projects" activeStyle>
			PROJECTS
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
