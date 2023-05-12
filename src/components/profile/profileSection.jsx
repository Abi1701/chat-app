import React from "react";
import styled from "./profile.module.scss";
import PP from "../../assets/profile.png";

export default function userProfile() {
	return (
		<div className={styled.profileContainer}>
			<div className={styled.profileSection}>
				<img className={styled.profilePicture} src={PP} alt="profilePicture" />
				<h1>Profile Name</h1>
				<h2>User Name</h2>
				<h3>email</h3>
			</div>
		</div>
	);
}
