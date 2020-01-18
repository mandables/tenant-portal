import React, { Component } from 'react';

export default class ProblemForm extends Component {
	render() {
		return (
			<div>
				Choose the issue that you have:
				<select>
					<option>Boiler</option>
					<option>Gas leak</option>
					<option>General repairs</option>
				</select>
			</div>
		);
	}
}
