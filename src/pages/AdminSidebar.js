import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";

import SubMenu from "../components/SubMenu";
import { IconContext } from "react-icons/lib";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrusttIcon from '../assests/Trustt.png';
import Legend from "../pages/Legend";
import { FaRegUserCircle } from "react-icons/fa";
import { CenturyView } from "react-calendar";
import  AdminSidebarMenu  from "./AdminSidebarMenu";


const Nav = styled.div`
	background: white;
	height: 80px;
	display: flex;
	
	font-family: cairo;
	justify-content: flex-start;
	align-items: center;
    border-radius: 4px;
    padding: 0 2rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: 350ms;
    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const NavIcon = styled.div`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	font-family: cairo;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: white;
	width: 250px;
	height: 100vh;
	display: flex;
	font-family: cairo;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

  

const AdminSidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const sidebarRef = useRef();

	const showSidebar = () => setSidebar(!sidebar);
    

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (
				sidebar &&
				sidebarRef.current &&
				!sidebarRef.current.contains(e.target) &&
				!e.target.classList.contains("nav-icon")
			) {
				setSidebar(false);
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [sidebar]);

	return (
		<>
			<IconContext.Provider value={{ color: "Black" }}>
				<Nav>
					<NavIcon to="#" className="nav-icon">
						<FaBarsProgress  onClick={showSidebar} />
					</NavIcon>
					<h1
						style={{
							textAlign: "center",
							margin: "auto",
							color: "Black",
						}}
					>
						Employee Management System
					</h1>
                    <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic">
      Admin
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Item href="/Logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
	
				</Nav>
				<SidebarNav sidebar={sidebar} ref={sidebarRef}>
					<SidebarWrap>
						<NavIcon>
						
						<img src={TrusttIcon} alt="" />

                            <h1 className="p-3 mb-md-0 ">Trustt</h1>
						</NavIcon>
						{AdminSidebarMenu.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default AdminSidebar;
