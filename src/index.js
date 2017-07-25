import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { firebaseApp } from './firebase'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

// Listener for auth state
firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log('user has signed in or up', user)
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
	<Router path='/' history={browserHistory}>
		<Route path='/app' component={App} />
		<Route path='/signin' component={SignIn} />
		<Route path='/signup' component={SignUp} />
		
	</Router>, document.getElementById('root')
)