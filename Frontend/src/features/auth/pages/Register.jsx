// pages/Register.jsx
import "../auth.form.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";
import AuthLayout from "./AuthLayout";

function Register() {
	const navigate = useNavigate();
	const { loading, handleRegister } = useAuth();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleRegister({ username, email, password });
		navigate("/");
	};
	return (
		<AuthLayout>
			<div className="form-container">
				{/* Modern Sliding Segmented Switcher */}
				<div className="auth-toggle-switcher">
					<div className="slider-indicator register-active"></div>
					<button
						type="button"
						className="switch-tab"
						onClick={() => navigate("/login")}
					>
						Login
					</button>
					<button type="button" className="switch-tab active">
						Register
					</button>
				</div>

				<div className="header-meta">
					<h1>Create Account</h1>
					<p className="subtitle">Start accelerating your career today</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							id="username"
							name="username"
							placeholder="Enter Username"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
							name="email"
							placeholder="Enter Your Email"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							name="password"
							placeholder="Enter Your Password"
						/>
					</div>

					<button className="button primary-button">Register</button>
				</form>
			</div>
		</AuthLayout>
	);
}

export default Register;
