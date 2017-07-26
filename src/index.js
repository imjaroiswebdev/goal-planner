import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { firebaseApp } from './firebase'
import { logUser } from './actions'
import reducer from './reducers'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const store = createStore(reducer)

// Listener for auth state
firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log('user has signed in or up', user)
		const { email } = user
		store.dispatch(logUser(email))
		// If the user pass then have acces to the app route
		browserHistory.push('/app')
	} else {
		console.log('user has sign out or still needs to sign in.')
		// When sign out user get redirected to sign in page
		browserHistory.replace('/signin')
	}
})

// Routing with react-router
ReactDOM.render(
	<Provider store={store}>
		<Router path='/' history={browserHistory}>
			<Route path='/app' component={App} />
			<Route path='/signin' component={SignIn} />
			<Route path='/signup' component={SignUp} />
			
		</Router>
	</Provider>, document.getElementById('root')
)