import React, { Component } from 'react';

const ContactForm = () => {
	return(
		<section className="section">
			<div className="container is-fluid has-text-centered">
				<h1 className="title">
					Contact
				</h1>
				<p className='subtitle'>
					Questions? Contact me here:
				</p>
				<div style={{maxWidth:'500px', margin:'0 auto', borderTop:'5px solid #393939', borderBottom:'5px solid #393939', padding:'5px'}}>
					<section className="section">
						<div className="columns">
							<div className="column">
								<div className="card" style={{backgroundColor: '#B07800', border: '5px solid #393939'}}>
								  <div className="card-content">
								    <div className="content">
								      <a href="mailto:aarondubenion@gmail.com">Email</a>
								    </div>
								  </div>
								</div>
							</div>

							<div className="column">
								<div className="card" style={{backgroundColor: '#B07800', border: '5px solid #393939'}}>
								  <div className="card-content">
								    <div className="content">
								      <a href="https://linkedin.com/in/aaron-dubenion" target="_blank">LinkedIn</a>
								    </div>
								  </div>
								</div>
							</div>

							<div className="column">
								<div className="card" style={{backgroundColor: '#B07800', border: '5px solid #393939'}}>
								  <div className="card-content">
								    <div className="content">
								      <a href="https://github.com/adubenion" target="_blank">GitHub</a>
								    </div>
								  </div>
								</div>
							</div>		
						</div>
					</section>	
				</div>
			</div>
		</section>
		)
}

export default ContactForm