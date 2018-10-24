import * as firebase from 'firebase'
import {FirebaseAppConfig, FirebaseOptions} from "@firebase/app-types";

const options: FirebaseOptions = {
  apiKey: 'AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc',
  authDomain: 'ondetempico.firebaseapp.com',
  databaseURL: 'https://ondetempico.firebaseio.com',
  storageBucket: 'ondetempico.appspot.com',
};

export const firebaseApp: FirebaseAppConfig = firebase.initializeApp(options)
