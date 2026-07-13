// pages/Login.jsx
import "../auth.form.scss";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../hook/useAuth";
import { useState } from "react";
import AuthLayout from "./AuthLayout";

function Login() {
	const navigate = useNavigate();
	const { loading, handleLogin } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleLogin({ email, password });
		navigate("/");
	};

	if (loading) {
		return (
			<main className="loading-state">
				<h1>Loading...</h1>
			</main>
		);
	}

	return (
		<AuthLayout>
			<div className="form-container">
				{/* Modern Sliding Segmented Switcher */}
				<div className="auth-toggle-switcher">
					<div className="slider-indicator login-active"></div>
					<button type="button" className="switch-tab active">
						Login
					</button>
					<button
						type="button"
						className="switch-tab"
						onClick={() => navigate("/register")}
					>
						Register
					</button>
				</div>

				<div className="header-meta">
					<h1>Welcome Back</h1>
					<p className="subtitle">Sign in to resume your preparation</p>
				</div>

				<form onSubmit={handleSubmit}>
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

					<button className="button primary-button">Login</button>
				</form>
			</div>
		</AuthLayout>
	);
}

export default Login;
