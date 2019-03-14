import firebase from 'firebase'
import 'firebase/firestore'
const firebaseAccount = require('~/firebaseAccountKey.json')

if (!firebase.apps.length) {
  firebase.initializeApp({ ...firebaseAccount })
}
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
export { db }
