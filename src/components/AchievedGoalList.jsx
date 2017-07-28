import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAchieved } from '../actions'
import { achievedGoalRef } from '../firebase'

class AchievedGoalList extends Component {
	componentDidMount() {
		achievedGoalRef.on('value', snap => {
			let achievedGoals = []
			snap.forEach(achievedGoal => {
				const { email, title } = achievedGoal.val()
				achievedGoals.push({ email, title })
			})
			this.props.setAchieved(achievedGoals)
		})
	}

	clearAchieved() {
		// Setting a blank array to the collection will erase it
		achievedGoalRef.set([])
	}

	render() {
		return (
			<div>
				{
					this.props.achievedGoals.map((achievedGoal, item) => {
						const { email, title } = achievedGoal
						return (
							<div key={item} style={{marginLeft: '10px'}}>
								<strong>{title}</strong> achieved by <em>{email}</em>
							</div>
						)
					})
				}
				<br />
				<button
					className="btn btn-primary"
					onClick={() => this.clearAchieved()}
				>
					Clear All
				</button>
			</div>
		) 
	}
}

function mapStateToProps(state) {
	const { achievedGoals } = state
	return {
		achievedGoals
	}
}

export default connect(mapStateToProps, { setAchieved })(AchievedGoalList);