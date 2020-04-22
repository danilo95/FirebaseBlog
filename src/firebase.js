import firebase from "firebase";
import database from "firebase/database";

const config = {
	apiKey: "AIzaSyBZ2liPAyMcnlwHDZIm5hLTL6zUBS888Eo",
	authDomain: "blog-9faa8.firebaseapp.com",
	databaseURL: "https://blog-9faa8.firebaseio.com",
	projectId: "blog-9faa8",
	storageBucket: "blog-9faa8.appspot.com",
	messagingSenderId: "105070956688",
	appId: "1:105070956688:web:0d79f382b1f21c538d8815",
};

let firebaseCache;

export const getFirebase = () => {
	if (firebaseCache) {
		return firebaseCache;
	}
	firebase.initializeApp(config);
	firebaseCache = firebase;
	return firebase;
};