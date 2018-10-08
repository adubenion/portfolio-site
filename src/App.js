import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import Home from './views/Home';
import MyProjects from './views/MyProjects';
import MyPosts from './views/MyPosts';
import ContactMe from './views/ContactMe';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: 'not-active'
		}
	}

	handlePostsVisibility() {
		this.state.postsVisibility === 'visible' ? (this.setState({postsVisibility:'hidden'})):(this.setState({postsVisibility:'visible'}))
	}

	handleMenu() {
		var toggle = this.state.isActive
		if (toggle == 'is-active') {
			toggle = 'not-active'
			this.setState({isActive:toggle})
		} else {
			toggle = 'is-active'
			this.setState({isActive:toggle})
		}
	}

	render() {
	return (
		<div>
			<Title menu={this.state.isActive} handleMenu={this.handleMenu.bind(this)} />
			<Route exact path='/' component={Home} />
			<Route exact path='/projects' component={MyProjects} />
			<Route exact path='/contact' component={ContactMe} />
			<Footer />
		</div>
		);
	}
}

export default App;
