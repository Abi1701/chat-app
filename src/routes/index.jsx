import React from "react";
import { Navigate } from "react-router-dom";
import MainPage from "../page/mainPage/mainPage";
import RegisterUser from "../page/register/register";
import Auth from "../page/authPage/auth";
import LayoutOther from "../page/layout/layoutOther";
import Layout from "../page/layout/layout";

const Router = (loggedIn) => {
	return [
		{
			path: "apps",
			element: loggedIn ? <Layout /> : <Navigate to="/apps/chat" />,
			children: [{ path: "chat", element: <MainPage /> }],
		},
		{
			path: "/auth",
			element: !loggedIn ? <LayoutOther /> : <Navigate to="/" />,
			children: [
				{ path: "login", element: <Auth /> },
				{ path: "register", element: <RegisterUser /> },
			],
		},
		{
			path: "/",
			element: <Auth />,
		},
	];
};
export default Router;
