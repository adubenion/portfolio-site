import React from "react";
import "./Project.css";

const Project = props => {
	return (
		<div className="project-container">
			<section className="section">
				<div className="container is-fluid has-text-centered">
					<div className="card">
						<div className="card-content">
							<div className="content">
								<h1 className="title is-4">{props.projectTitle}</h1>
								<p className="subtitle">{props.projectDescription}</p>
								<a href={props.projectLink} target="_blank" rel="noopener noreferrer">
									View Here
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Project;
