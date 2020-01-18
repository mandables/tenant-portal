import React, { Component } from 'react';
import './App.css';
import ProblemForm from './components/ProblemForm';
import Appointments from './components/Appointments';

class App extends Component {
	state = {
		display: this.APPOINTMENTS
	};

	PROBLEM = 'problem';
	APPOINTMENTS = 'appointments';

	renderComponent = () => {
		if (this.state.display === this.PROBLEM) {
			return <ProblemForm />;
		} else if (this.state.display === this.APPOINTMENTS) {
			return <Appointments />;
		} else {
			return (
				<div>
					<h1 onClick={() => this.changeDisplay(this.PROBLEM)}>Report a problem</h1>
					<h1 onClick={() => this.changeDisplay(this.APPOINTMENTS)}> Appointments</h1>
				</div>
			);
		}
	};

	changeDisplay = (type) => {
		this.setState({
			display: type
		});
	};

	render() {
		return <div className="App">{this.renderComponent()}</div>;
	}
}

export default App;
