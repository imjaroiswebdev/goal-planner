import React, { Component } from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'


class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			err: {
				message: ''
			}
		}
	}

	signIn() {
		console.log('this.state...', this.state)
		const { email, password } = this.state
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(err => this.setState({err}))
	}


	render() {
		return (
			<div className="form-inline" style={{margin: '5%'}} >
				<h2>Sign In</h2>
				<div className="form-group">
					<input 
						type="text" 
						className="form-control"
						placeholder="email"
						onChange={event => this.setState({email: event.target.value})}
					/>
					<input
						type="password"
						className="form-control"
						placeholder="password"
						onChange={event => this.setState({password: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						onClick={() => this.signIn()}
					>
						Sign In
					</button>
				</div>
				<div>
					{
						// Error message notifier
						this.state.err.message
					}
				</div>
				<div>Create an <Link to={'/signup'}>account</Link></div>
			</div>
		)
	}
}

export default SignIn;