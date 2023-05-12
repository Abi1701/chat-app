import React, { useState } from "react";
import styled from "./auth.module.scss";
import axios from "axios";

export default function Auth() {
	const [value, setValue] = useState({
		username: "",
		password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};

	const handleLogin = async () => {
		try {
			const { data } = await axios.post("/api/api/token/", {
				username: value.username,
				password: value.password,
			});
			localStorage.setItem("_q", data.accessToken);
			window.location.reload();
		} catch (error) {}
	};
	return (
		<div className={styled.authPageContainer}>
			<div className={styled.formContainer}>
				<div className={styled.formLogin}>
					<h1>Hey Users! please login first</h1>
					<input
						type="text"
						required
						placeholder="User Name"
						onChange={handleChange("username")}
					/>
					<input
						type="password"
						required
						placeholder="Password"
						onChange={handleChange("password")}
					/>
					<button
						onClick={handleLogin}
						className={styled.buttonSubmit}
						type="submit">
						Submit
					</button>
					<a className={styled.buttonRegister} href="/auth/register">
						You don't have a account? Please Sign Up Here!
					</a>
				</div>
			</div>
		</div>
	);
}
