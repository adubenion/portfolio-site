import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProjectView from './views/ProjectView';
import ContactView from './views/ContactView';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: 'not-active',
			projectsVisibility: 'hidden',
			projects: [],
			posts: []
		}
		this.handleProjectsVisibility = this.handleProjectsVisibility.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
	}

	componentDidMount() {
		import('./data/projects.json')
			.then(res => res.data)
			.then(data => this.setState({
				projects: data
			}, () => {console.log(this.state)}));
	}

	handleProjectsVisibility() {
		let projectToggle = this.state.projectsVisibility;
		if (projectToggle === 'visible') {
			this.setState({projectsVisibility:'hidden'});
		}
		else {
			this.setState({projectsVisibility:'visible'});
		}
	}	

	handleMenu() {
		let menuToggle = this.state.isActive;
		if (menuToggle === 'is-active') {
			menuToggle = 'not-active'
			this.setState({isActive:menuToggle})
		} 
		else {
			menuToggle = 'is-active'
			this.setState({isActive:menuToggle})
		}
	}

	render() {
	return (
		<div>
			<Title 
				menu={this.state.isActive} 
				handleMenu={this.handleMenu} 
			/>
			<Route exact path='/' component={HomeView} />
			<Route exact path='/projects' render={(props) => 
				<ProjectView 
					{...props} 
					projectsVisibility={this.state.projectsVisibility}
					handleProjectsVisibility={this.handleProjectsVisibility}
					projects={this.state.projects} />} 
				/>
			<Route exact path='/contact' component={ContactView} />
			<Footer />
		</div>
		);
	}
}

export default App;
