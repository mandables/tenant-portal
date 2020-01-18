import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Appointments() {
	let useStyles = makeStyles({
		table: {
			minWidth: 650
		}
	});

	let createData = (issue, date_reported, appointment_date) => {
		return { issue, date_reported, appointment_date };
	};

	let rows = [ createData('Boiler', '18/01/2020', '20/01/2020') ];

	let classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Issue</TableCell>
						<TableCell align="right">Date Reported</TableCell>
						<TableCell align="right">Appointment Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.issue}>
							<TableCell component="th" scope="row">
								{row.issue}
							</TableCell>
							<TableCell align="right">{row.date_reported}</TableCell>
							<TableCell align="right">{row.appointment_date}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default Appointments;

