import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Title = (props) => {
	return(
		<section className="hero is-bold">
		  <div className="hero-body" style={{backgroundColor: '#B07800'}}>
		    <div className="container is-fluid" style={{borderLeft: '5px solid #393939', borderBottom: '5px solid #393939'}}>
		      <h1 className="title">
		        Aaron DuBenion-Souza
		      </h1>
		      <h2 className="subtitle">
		        Web Developer | Software Engineer | Freelancing
		      </h2>
		      <div className="container is-fluid">
			      <nav className="navbar" role="navigation" aria-label="main navigation">
						  <div className="navbar-brand">
						    <a role="button" className={"navbar-burger" +' '+ props.menu} aria-label="menu" aria-expanded="false" onClick={props.handleMenu}>
						    	<span aria-hidden="true"></span>
									<span aria-hidden="true"></span>
									<span aria-hidden="true"></span>
						    </a>
						  </div>
						  <div className={"navbar-menu" +' '+ props.menu }>
						    <Link className="navbar-item" to='/'>Home</Link>
						    <Link className="navbar-item" to='/projects'>Projects</Link>
						    <Link className="navbar-item" to='/contact'>Contact</Link>
						  </div>
						</nav>
		      </div>
		    </div>
		  </div>
		</section>
		)
}
export default Title
