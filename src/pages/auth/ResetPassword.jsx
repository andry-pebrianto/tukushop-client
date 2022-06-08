import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/auth/auth.css";
import Input from "../../components/auth/Input";
import Navigation from "../../components/auth/Navigation";
import Submit from "../../components/auth/SubmitButton";
import Title from "../../components/auth/Title";

export default function ResetPassword() {
	const [form, setForm] = useState({
		password: "",
		confirmPassword: "",
	});
	const onSubmit = () => {
		console.log(form);
	};

	return (
		<section className="auth">
			<div className="content">
				<Title caption="Reset password" />
				<p style={{ color: "#32C33B", fontWeight: "500" }}>
          You need to change your password to activate your account
				</p>
				<form className="form-input">
					<Input
						type="password"
						placeholder="Password"
						setData={(e) => setForm({ ...form, password: e.target.value })}
					/>
					<Input
						type="password"
						placeholder="Confirmation New Password"
						setData={(e) =>
							setForm({ ...form, confirmPassword: e.target.value })
						}
					/>
				</form>
				<Link to="/forgot" className="forgot">
          Forgot password?
				</Link>
				<Submit onSubmit={onSubmit} caption="Reset" />
				<Navigation
					caption="Don't have a Tokopedia account?"
					to="/register"
					toCaption="Register"
				/>
			</div>
		</section>
	);
}
