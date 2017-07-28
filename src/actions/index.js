import { SIGNED_IN } from '../constants'
import { SET_GOALS } from '../constants'
import { SET_ACHIEVED } from '../constants'

export function logUser(email) {
	const action = {
		type:SIGNED_IN,
		email
	}
	return action
}

export function setGoals(goals) {
	const action = {
		type: SET_GOALS,
		goals
	}
	return action
}

export function setAchieved(achievedGoals) {
	const action = {
		type: SET_ACHIEVED,
		achievedGoals
	}
	return action
}