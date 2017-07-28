import { combineReducers } from 'redux'
import user from './reducer_user'
import goals from './reducer_goals'
import achievedGoals from './reducer_achieved_goals'

export default combineReducers({
	user,
	goals,
	achievedGoals
})