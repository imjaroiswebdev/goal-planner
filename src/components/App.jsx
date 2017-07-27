import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'
import AddGoal from './AddGoal'
import GoalList from './GoalList'

class App extends Component {
	signOut() {
		firebaseApp.auth().signOut()
	}

	render() {
		return (
			<div style={{margin: '10px'}}>
				<h3>Goal Planner</h3>
				<hr />
				<AddGoal />
				<h4>Goals</h4>
				<GoalList />
				<hr />
				<button
					className="btn btn-danger"
					onClick={() => this.signOut()}
				>
					Sing Out
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log('state', state)
	return {}
}

export default connect(mapStateToProps, null)(App);