import Navbar from "../../nav/Navbar";
import "../auth.form.scss";

function AuthLayout({ children }) {
	return (
		<div className="auth-page-wrapper">
			<Navbar />

			<main className="auth-split-container">
				{/* Left Side: Modern AI Job Prep Branding */}
				<div className="auth-left-panel">
					<div className="grid-overlay"></div>
					<div className="left-content">
						<span className="badge">AI-Powered Platform</span>
						<h1>Land your dream tech role with absolute confidence.</h1>
						<p>
							Simulate real-time technical interviews, optimize your resume for
							ATS tracking, and sharpen your system design skills with tailored
							AI coaching.
						</p>
						<div className="feature-list">
							<div className="feature-item">
								<span className="icon">✓</span>{" "}
								<span>Smart Mock Interviews</span>
							</div>
							<div className="feature-item">
								<span className="icon">✓</span>{" "}
								<span>Real-time Feedback Metrics</span>
							</div>
							<div className="feature-item">
								<span className="icon">✓</span>{" "}
								<span>Tailored IT Placement Tracks</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side: Dynamic Form Content */}
				<div className="auth-right-panel">
					<div className="form-fade-wrapper">{children}</div>
				</div>
			</main>
		</div>
	);
}

export default AuthLayout;
