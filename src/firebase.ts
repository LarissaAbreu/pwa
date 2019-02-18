import * as firebase from 'firebase'

const options = {
  apiKey: 'AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc',
  authDomain: 'ondetempico.firebaseapp.com',
  databaseURL: 'https://ondetempico.firebaseio.com',
  storageBucket: 'ondetempico.appspot.com'
}

const firebaseApp: firebase.app.App = firebase.initializeApp(options)

export const databaseRef: firebase.database.Database = firebaseApp.database()

export const authRef: firebase.auth.Auth = firebaseApp.auth()
export const provider: firebase.auth.FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()
