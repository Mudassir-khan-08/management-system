import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<div className="welcome-banner">
				<h2>Welcome to the SGP Student Management System</h2>
				<p className="subtitle">Our platform is designed to simplify and enhance the way educational institutions manage their daily operations. With a user-friendly interface and intuitive tools, educators can focus more on teaching while administrative tasks are handled seamlessly.</p>
			</div>
			<div className="features-section">
				<h3>More About:</h3>
				<ul>
					<li>Manage student records</li>
					<li>Stay organized</li>
					<li>improve communication</li>
					<li>our platform provides the support you need to succeed.</li>
				</ul>
			</div>

			
		</div>
	);
};

export default Home;
