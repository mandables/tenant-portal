import React, { Component } from 'react';
import './App.css';
import ProblemForm from './components/ProblemForm';
import Appointments from './components/Appointments';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
				<div id="main">
					<Button variant="outlined" color="primary" onClick={() => this.changeDisplay(this.PROBLEM)}><h1 >Report a problem</h1></Button>
					<Button variant="outlined" color="secondary"><h1 onClick={() => this.changeDisplay(this.APPOINTMENTS)}> Appointments</h1></Button>
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
		// return <div className="App">{this.renderComponent()}</div>;
		// return <Container fixed>{this.renderComponent()}</Container>
		return <div>{this.renderComponent()}</div>
	}
}

export default App;
