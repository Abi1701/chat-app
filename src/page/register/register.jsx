import React, { useState } from "react";
import styled from "./register.module.scss";
import axios from "../../utils/axios";

export default function RegisterUser() {
	const [value, setValue] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		telephone: "",
		profile_image: "",
		address: "",
		city: "",
		province: "",
		country: "",
	});

	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};

	const handleRegister = async () => {
		try {
			await axios.post("/api/register", {
				username: value.username,
				email: value.email,
				password: value.password,
				first_name: value.first_name,
				last_name: value.last_name,
				telephone: value.telephone,
				profile_image: value.profile_image,
				address: value.address,
				city: value.city,
				province: value.province,
				country: value.country,
			});
			window.location.reload();
			console.log("terdaftar");
		} catch (error) {}
	};
	return (
		<div className={styled.registerPage}>
			<div className={styled.formContainer}>
				<div className={styled.formRegister}>
					<div className={styled.formRegister1}>
						<input
							type="text"
							required
							placeholder="username"
							onChange={handleChange("username")}
						/>
						<input
							type="text"
							required
							placeholder="first name"
							onChange={handleChange("first_name")}
						/>
						<input
							type="text"
							required
							placeholder="telephone"
							onChange={handleChange("telephone")}
						/>
						<input
							type="text"
							required
							placeholder="country"
							onChange={handleChange("country")}
						/>
						<input
							type="text"
							required
							placeholder="city"
							onChange={handleChange("city")}
						/>
					</div>
					<div className={styled.formRegister2}>
						<input
							type="password"
							required
							placeholder="password"
							onChange={handleChange("password")}
						/>
						<input
							type="text"
							required
							placeholder="last name"
							onChange={handleChange("last_name")}
						/>
						<input
							type="text"
							required
							placeholder="address"
							onChange={handleChange("address")}
						/>
						<input
							type="text"
							required
							placeholder="province"
							onChange={handleChange("province")}
						/>
						<input
							type="file"
							required
							placeholder=""
							onChange={handleChange("profile_image")}
						/>
					</div>
					<div className={styled.submitSection}>
						<h1>
							If you done to fill the form, click the Submit Button below!
						</h1>
						<button
							onClick={handleRegister}
							className={styled.submitButton}
							type="submit">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
