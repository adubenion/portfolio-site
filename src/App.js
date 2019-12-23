import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import Title from "./components/Title";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";

const App = () => {
	const [isActive, setIsActive] = useState("not-active");
	const [projectsVisibility, setProjectsVisibility] = useState("hidden");
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		import("./data/projects.json")
			.then(res => res.data)
			.then(data => setProjects(data));
	}, []);

	const handleProjectsVisibility = () => {
		if (projectsVisibility === "visible") {
			setProjectsVisibility("hidden");
		} else {
			setProjectsVisibility("visible");
		}
	};

	const handleMenu = () => {
		let menuToggle = this.state.isActive;
		if (isActive === "is-active") {
			setIsActive(menuToggle);
		} else {
			setIsActive(menuToggle);
		}
	};

	return (
		<div>
			<Title menu={isActive} handleMenu={handleMenu} />
			<Route exact path="/" component={HomeView} />
			<Route
				exact
				path="/projects"
				render={props => (
					<ProjectView
						{...props}
						projectsVisibility={projectsVisibility}
						handleProjectsVisibility={handleProjectsVisibility}
						projects={projects}
					/>
				)}
			/>
			<Route exact path="/contact" component={ContactView} />
			<Footer />
		</div>
	);
};

export default App;
