import React, { Component } from "react";

export const Projects = () => {
	return (
		<div>
			<section className="section">
				<div
					className="container is-fluid has-text-centered"
					style={{ border: "5px solid #393939" }}
				>
					<div class="card" style={{ backgroundColor: "#B07800" }}>
						<div class="card-content">
							<div class="content">
								<h1 className="title is-4">ToDo App</h1>
								<p className="subtitle">
									Todo App with user authentication made with Vue, Bulma, Express,
									MongoDB
								</p>
								<a href="http://aarondubenion.com/todo-app" target="_blank">
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

export const ProjectsButton = props => {
	return (
		<section className="section">
			<div className="level has-text-centered">
				<div className="level-item has-text-centered">
					<button
						className="button is-dark"
						style={{ width: "500px" }}
						onClick={props.handleProjectsVisibility}
					>
						Show Projects
					</button>
				</div>
			</div>
		</section>
	);
};

export const ProjectsBody = () => {
	return (
		<section className="section">
			<div className="container is-fluid has-text-centered">
				<h1 className="title">Projects</h1>
				<p className="subtitle">
					<i>What I'm working on</i>
				</p>
				<div className="level">
					<div className="level-item">
						<p style={{ maxWidth: "800px" }}>
							Here are a few relevant projects that I am either working on or have
							worked on. When I come accross something that seems unique and
							interesting enough to add, I post them here. My full (public) body of
							work can be found on <a href="https://github.com/adubenion/">GitHub</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
