import { createStore, applyMiddleware, compose } from "redux";
import usersReducer from "../reducers/usersReducer";
import firebase from "../firebase/Config";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";

const store = createStore(
  usersReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
