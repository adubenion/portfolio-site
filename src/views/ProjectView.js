import React from 'react';
import Project from '../components/projects/Project'
import ProjectToggleButton from '../components/projects/ProjectToggleButton';
import ProjectsBody from '../components/projects/ProjectsBody';

function ProjectView(props) {
	return(
		<div>
			<ProjectsBody />
			{props.projectsVisibility === 'visible' ? 
			(props.projects.map(project => 
				<div key={project.title}>
					<ProjectToggleButton handleProjectsVisibility={props.handleProjectsVisibility} />
					<Project projectTitle={project.title} projectDescription={project.description} projectLink={project.link} />
				</div>
			)) :
			(false)}
			<ProjectToggleButton handleProjectsVisibility={props.handleProjectsVisibility} />
		</div>
	) 
}
export default ProjectView