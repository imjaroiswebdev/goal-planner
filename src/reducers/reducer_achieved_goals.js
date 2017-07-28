import { SET_ACHIEVED } from '../constants'

export default (state = [], action) => {
	switch(action.type) {
		case SET_ACHIEVED:
			const { achievedGoals } = action
			return achievedGoals
		default:
			return state;
	}
}