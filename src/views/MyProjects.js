import React, { Component } from 'react';
import { ProjectsBody, Projects, ProjectsButton } from '../components/Projects';

class MyProjects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectsVisibility: 'hidden'
		}
	}

		handleProjectsVisibility() {
		this.state.projectsVisibility === 'visible' ? (this.setState({projectsVisibility:'hidden'})):(this.setState({projectsVisibility:'visible'}))
	}	

	render() {
		return(
			<div>
				<ProjectsBody />
				<ProjectsButton visibility={this.handleProjectsVisibility.bind(this)} />
				{this.state.projectsVisibility === 'visible' ? (<Projects />) : (false)}
			</div>
		) 
	}
}
export default MyProjects