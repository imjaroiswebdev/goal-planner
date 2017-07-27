import React, { Component } from 'react'
import { connect } from 'react-redux'
import { achievedGoalRef, goalRef } from '../firebase'

class GoalItem extends Component {
	// Function for storing achieved goals and
	// registering whom achieved it
	achieveGoal() {
		const { email }	= this.props.user
		const { title, dbKey } = this.props.goal
		// This the achieved goals from the goals DB
		goalRef.child(dbKey).remove()
		// This adds the achieved goals to the Achieved Goals DB
		achievedGoalRef.push({email, title})
	}

	render() {
		const { email, title } = this.props.goal
		return (
			<div style={{margin: '10px'}}>
				<strong>{title}</strong>
				<span style={{marginRight: '5px'}}> submited by <em>{email}</em></span>
				<button
					className="btn btn-sm btn-primary"
					onClick={() => this.achieveGoal()}
					>
					Achieved
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// Will connect with the store (Redux) for
	// getting the current user data
	const { user } = state
	return {
		user
	}
}

export default connect(mapStateToProps, null)(GoalItem);