import React, { Component, useState } from 'react';
import { TextField, Button, Typography, Paper, Container, FormControl, FormControlLabel, FormLabel, Grid, FormGroup, makeStyles } from '@material-ui/core'
import { createPost } from '../../Actions/posts'
// BackEnd additional
import { useDispatch } from 'react-redux';
import useStyles from './styles';
//Routing Dependecies
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

const Form = () => {

	const [postData, setPostData] = useState({
		userName: '',
		password: '',
	})
	
	const classes = useStyles();

	//Backend Stuff
	const dispatch = useDispatch();

	//Handler for change in Post Data
	const handleChange = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
		console.log(postData)
		if (postData.userName == "admin" && postData.password == "12345") {
			alert("Log in succesful!"); //Login 
			
			//Redirect to Home Page
			window.location.replace('/home')
		}
		else {
			alert("Wrong credentials")

		}

	}

	return (


		<form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

			{/* Title Card */}
			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h3>Admin Login Page</h3><br />

					<Container>
						<div >
							<TextField
								className={classes.textField}
								variant="filled"
								margin="normal"
								required
								fullWidth
								id="userName"
								label="User Name"
								name="userName"
								autoComplete="userName"
								autoFocus
								onChange={handleChange}
							/>
						</div>
						{/* Password Section */}
						<div>
							<TextField
								className={classes.textField}
								variant="filled"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
							/>

						</div><br />

						<div>
							<button className={classes.logInButton}>Log in</button>
						</div>

					</Container>
				</Container>
			</div>


			{/* Username Login Field */}

		</form>
	)
}

export default Form;
