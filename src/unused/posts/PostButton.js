import React from "react";

export const PostButton = props => {
	return (
		<div className="level has-text-centered">
			<div className="level-item has-text-centered">
				<button
					className="button is-dark"
					style={{ width: "500px" }}
					onClick={props.visibility}
				>
					Show Posts
				</button>
			</div>
		</div>
	);
};

export default PostButton;
