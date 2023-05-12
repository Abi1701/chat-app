import React from "react";
import styled from "./chatSection.module.scss";
import PP from "../../assets/profile.png";

export default function chatSection() {
	return (
		<div className={styled.chatContainer}>
			<div className={styled.chatSection}>
				<div className={styled.profileChatSection}>
					<img
						src={PP}
						alt="profilePicture"
						className={styled.profilePicture}
					/>
					<div className={styled.chatSectionUser}>
						<h1>userName</h1>
						<h5>chat preview</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
