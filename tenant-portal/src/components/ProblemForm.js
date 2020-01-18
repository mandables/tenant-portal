import React, { Component } from 'react';

export default class ProblemForm extends Component {

    state = {
        issue: '',
        length: ''
    }

    grabInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
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
							<input onClick={this.grabInput} type="radio" name="issue" value="today" />
							Started today
						</label>
					</div>
					<div className="radio">
						<label>
							<input onClick={this.grabInput} type="radio" name="length" value="week_under" />
							Under a week
						</label>
					</div>
					<div className="radio">
						<label>
							<input onClick={this.grabInput} type="radio" value="week_over" />
							More than a week
						</label>
                        <br />
                        <input type='submit' value="Submit" /> 
					</div>
				</form>
			</div>
		);
	}
}
