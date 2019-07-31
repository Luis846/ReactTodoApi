import React from "react";

export class TodoHead extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<h1 className="title mt-5 mb-5 text-light">
				<mark className="shadow">Todo</mark>
				-List
			</h1>
		);
	}
}
