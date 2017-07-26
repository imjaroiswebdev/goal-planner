import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCjD_uHGts2e93kGMqKICwpRuDQmeZiO4o",
  authDomain: "goal-planner-858cd.firebaseapp.com",
  databaseURL: "https://goal-planner-858cd.firebaseio.com",
  projectId: "goal-planner-858cd",
  storageBucket: "goal-planner-858cd.appspot.com",
  messagingSenderId: "955941816416"
};

export const firebaseApp = firebase.initializeApp(config)
// Connection with Firebase DB an collection goals
export const goalRef = firebase.database().ref('goals')