import React from "react";

const PostView = props => {
	console.log(props.posts);
	var posts = [];

	for (var i = 0; i < props.posts.length; i++) {
		posts.push(props.posts[i]);
	}
	const content = posts.map((i, key) => (
		<div
			key={i.slug}
			className="container is-fluid has-text-centered"
			style={{ border: "5px solid #393939", margin: "0 0 5px 0" }}
		>
			<h1 className="title" style={{ borderBottom: "5px solid #393939" }}>
				{i.title}
			</h1>
			<div className="content" dangerouslySetInnerHTML={{ __html: i.body }} />
		</div>
	));
	console.log(content);

	return (
		<section className="section">
			<h1 className="title has-text-centered">My Posts:</h1>
			{content}
		</section>
	);
};

export default PostView;
