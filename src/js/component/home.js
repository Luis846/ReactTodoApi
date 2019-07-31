import React from "react";
import { TodoHead } from "./todohead.js";
import { Todo } from "./todo.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<TodoHead />
				<Todo />
			</div>
		);
	}
}
