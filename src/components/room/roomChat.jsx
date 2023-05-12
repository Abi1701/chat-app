import React from "react";
import styled from "./roomChat.module.scss";
import PP from "../../assets/profile.png";

export default function roomChat() {
	return (
		<div className={styled.roomChatContainer}>
			<nav className={styled.navChat}>
				<img className={styled.profilePicture} src={PP} alt="profilePicture" />
				<h1 className={styled.userName}>userName</h1>
			</nav>
			<div className={styled.chatBoxContainer}>
				<div className={styled.chatBoxMessage}></div>
				<div className={styled.chatBoxEnter}>
					<input
						type="text"
						name="chatBox"
						id="chatBox"
						className={styled.chatBox}
					/>
					<div className={styled.buttonContainer}>
						<button className={styled.buttonSend}>Send</button>
						<button type="submit" className={styled.buttonAttached}>
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
