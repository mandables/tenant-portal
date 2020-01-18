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
				How long has this issue been going on for?
				<form>
					<div className="radio">
						<label>
							<input type="radio" value="option1" />
							Started today
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" />
							Under a week
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" />
							More than a week 
						</label>
					</div>
				</form>
			</div>
		);
	}
}
