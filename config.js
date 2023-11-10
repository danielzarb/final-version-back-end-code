const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAuJo3k88nJIKWKfbRHkq2FdYuKYRB6ifw",
  authDomain: "beansceneapp-20926.firebaseapp.com",
  databaseURL: "https://beansceneapp-20926-default-rtdb.firebaseio.com",
  projectId: "beansceneapp-20926",
  storageBucket: "beansceneapp-20926.appspot.com",
  messagingSenderId: "504796029194",
  appId: "1:504796029194:web:2d61f09a1e04d307dc5af3",
  measurementId: "G-4NB1HBERLV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };


