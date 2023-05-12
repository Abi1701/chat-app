import React from "react";
import {
	CDBSidebar,
	// CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import PP from "../../assets/profile.png";
import styled from "../sideBar/sideBar.module.scss";

export default function sideBar() {
	const handleLogout = () => {
		localStorage.removeItem("_q");
		window.location.reload();
	};
	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				overflow: "scroll initial",
			}}>
			<CDBSidebar textColor="#fff" backgroundColor="#61876E">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a
						href="/"
						className="text-decoration-none"
						style={{ color: "inherit" }}>
						Hello, UserName{" "}
						<span>
							<img src={PP} alt="profile" className={styled.profileImage} />
						</span>
					</a>
				</CDBSidebarHeader>
				<CDBSidebarMenu>
					<CDBSidebarMenuItem>Profile</CDBSidebarMenuItem>
					<CDBSidebarMenuItem>Add Friend</CDBSidebarMenuItem>
					<CDBSidebarMenuItem>Archive</CDBSidebarMenuItem>
					<CDBSidebarMenuItem onClick={handleLogout}>
						Log Out
					</CDBSidebarMenuItem>
				</CDBSidebarMenu>
				<CDBSidebarFooter style={{ textAlign: "center" }}>
					<div
						className="sidebar-btn-wrapper"
						style={{
							padding: "20px 5px",
						}}>
						Coded <br /> by <br /> MNA
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
}
