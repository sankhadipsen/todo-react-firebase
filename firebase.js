import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDbHWob4atexgRSvQvdmd3h2wwaqd745M8",
        authDomain: "todo-177d1.firebaseapp.com",
        databaseURL: "https://todo-177d1.firebaseio.com",
        projectId: "todo-177d1",
        storageBucket: "todo-177d1.appspot.com",
        messagingSenderId: "5805197780",
        appId: "1:5805197780:web:84c37d81cbfb1f04706e41",
        measurementId: "G-SXG9WZ369R"
});

const db = firebaseApp.firestore();

export default db;