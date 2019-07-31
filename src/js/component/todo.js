import React from "react";

export class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			myList: [],
			input: ""
		};
	}

	// pressEnter = e => {
	// 	if (e.key === "Enter") {
	// 		this.setState({
	// 			input: e.target.value,
	// 			myList: this.state.myList.concat(e.target.value)
	// 		});
	// 		this.setState({ input: (e.target.value = "") });
	// 	}
	// };

	fetchStart = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/luisdev")
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				this.setState({ myList: data });
				console.log(data); //this will print on the console the exact object received from the server
			});
	};

	componentDidMount() {
		this.fetchStart();
	}

	addtoList = e => {
		if (e.key === "Enter") {
			let myObj = {
				label: e.target.value,
				done: true
			};
			this.setState({ input: (e.target.value = "") });

			let newVar = this.state.myList.concat(myObj);
			console.log(newVar);
			fetch("https://assets.breatheco.de/apis/fake/todos/user/luisdev", {
				method: "PUT",
				body: JSON.stringify(newVar),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					return resp.json();
				})
				.then(data => this.fetchStart(data));
		}
	};

	render() {
		return (
			<div className="container" s>
				<div>
					<input
						type="text"
						className="inputs shadow"
						placeholder="  Let's get started!..."
						onKeyPress={e => this.addtoList(e)}
						// onKeyPress={e => this.pressEnter(e)}
					/>

					{this.state.myList &&
						this.state.myList.map((listItem, i) => {
							return (
								<div className="row" key={i}>
									<div className="col border-bottom pb-2 spans pt-3">
										<span className="float-left">
											{listItem.label}
										</span>
										<span className="float-right">
											<i className=" pl-1 fas fa-times icons" />
										</span>
									</div>
									<p>{listItem.length}</p>
								</div>
							);
						})}
				</div>
				<div className="row">
					<div className="col pt-2">
						<span className="spans float-left length">
							There are {this.state.myList.length} tasks to
							complete
						</span>
					</div>
				</div>
			</div>
		);
	}
}
