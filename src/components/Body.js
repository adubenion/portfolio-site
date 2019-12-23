import React from "react";

const Body = props => {
	return (
		<section id="body" className="section">
			<div className="container is-fluid has-text-centered">
				<div className="level">
					<div className="level-item">
						<article className="media">
							<figure>
								<p className="image is-200x200">
									<img
										src="https://raw.githubusercontent.com/adubenion/portfolio-site/master/public/img/Potrait.png"
										alt="Portrait"
										style={{ border: "5px solid #393939" }}
									/>
								</p>
							</figure>
						</article>
					</div>
				</div>
				<h1 className="title">About Me</h1>
				<p className="subtitle">
					<i>The Day-to-Day</i>
				</p>
				<div className="level">
					<div className="level-item">
						<p className="body-of-text">
							I am a software developer out of Boston, MA who loves to create value for
							others. My goal is to make your dreams and concepts a reality. Take a
							poke around my site to learn more!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Body;
