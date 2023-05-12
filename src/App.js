import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index";
import "./App.css";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);
	const routing = useRoutes(routes(isAuth));
	return (
		<>
			<div>{routing}</div>
		</>
	);
}

export default App;
