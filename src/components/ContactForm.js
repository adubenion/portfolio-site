import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
	return (
		<section className="section">
			<div className="container is-fluid has-text-centered">
				<h1 className="title">Contact</h1>
				<p className="subtitle">Questions? Contact me here:</p>
				<div className="contact-card-container">
					<section className="section">
						<div className="columns">
							<div className="column">
								<div className="card">
									<div className="card-content">
										<div className="content">
											<a href="mailto:aarondubenion@gmail.com">Email</a>
										</div>
									</div>
								</div>
							</div>

							<div className="column">
								<div className="card">
									<div className="card-content">
										<div className="content">
											<a
												href="https://linkedin.com/in/aaron-dubenion"
												target="_blank"
												rel="noopener noreferrer"
											>
												LinkedIn
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="column">
								<div className="card">
									<div className="card-content">
										<div className="content">
											<a
												href="https://github.com/adubenion"
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
