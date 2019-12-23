import React from "react";
import "./ProjectToggleButton.css";

const ProjectToggleButton = props => {
	return (
		<section className="section">
			<div className="level has-text-centered">
				<div className="level-item has-text-centered">
					<button
						id="project-toggle-button"
						className="button is-dark"
						onClick={props.handleProjectsVisibility}
					>
						Show Projects
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProjectToggleButton;
