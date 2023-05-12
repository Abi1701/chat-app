import SideBar from "../../components/sideBar/sideBar";
import UserProfile from "../../components/profile/profileSection";
import ChatSection from "../../components/chat/chatSection";
import RoomChat from "../../components/room/roomChat";
import styled from "./mainPage.module.scss";

export default function mainPage() {
	return (
		<section className={styled.mainPageContainer}>
			<SideBar />
			<div>
				<UserProfile />
				<ChatSection />
			</div>
			<div>
				<RoomChat />
			</div>
		</section>
	);
}
