import firebase from 'firebase'
import 'firebase/firestore'
import config from './firebaseConfig'
const firebaseApp = firebase.initializeApp(config)
const fs = firebaseApp.firestore()
fs.settings({timestampsInSnapshots: true})
export default fs