import React, { Component } from 'react';
import { Posts, PostsButton } from './Posts';


class MyPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postsVisibility: 'hidden'
		}
	}
	render() {
		return(
			<div>
				<PostsButton visibility={this.handlePostsVisibility.bind(this)} />
				{this.state.postsVisibility === 'visible' ? (<Posts posts={this.state.content} />) : (false)}}
			</div>
		)
	}
}