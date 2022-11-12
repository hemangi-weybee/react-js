import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createStore, combineReducers}  from 'redux';

// const CREATE_POLICY = 'CREATE_POLICY';
// const DELETE_POLICY = 'DELETE_POLICY';
// const CREATE_CLAIM = 'CREATE_CLAIM';

// //Action Creater

// const createPolicy = (name, amount) => {
//   return {
//     type: CREATE_POLICY,
//     payload: {
//       name: name,
//       amount: amount,
//     }
//   };
// };

// const deletePolicy = (name) => {
//   return {
//     type: DELETE_POLICY,
//     payload: {
//       name: name,
//     }
//   };
// };

// const createClaim = (name, amountToCollect) => {
//   return {
//     type: CREATE_CLAIM,
//     payload: {
//       name: name,
//       amountToCollect: amountToCollect
//     }
//   };
// };

// //Reducers (Like Department)

// const claimsHistory = (oldListOfClaims = [], action) => {
//   switch (action.type) {
//     case CREATE_CLAIM: {
//       //We care about that form
//       return [...oldListOfClaims, action.payload];
//     }
//     default: {
//       return oldListOfClaims;
//     }
//   }
// };

// const accounting = (bagOfMoney = 500, action) => {
//   switch (action.type) {
//     case CREATE_CLAIM: {
//       return bagOfMoney - action.payload.amountToCollect;
//     }
//     case CREATE_POLICY: {
//       return bagOfMoney + action.payload.amount;
//     }
//     default: {
//       return bagOfMoney;
//     }
//   }
// };

// const policies = (oldListOfPolicies = [], action) => {
//   switch (action.type) {
//     case CREATE_POLICY: {
//       return [...oldListOfPolicies, action.payload.name]
//     }
//     case DELETE_POLICY: {
//       return oldListOfPolicies.filter(name => name !== action.payload.name)
//     }
//     default:{
//       return oldListOfPolicies;
//     }
//   }
// };

// const ourDept = combineReducers({
//   moneyWeHave: accounting,
//   claimsHistory: claimsHistory,
//   policies: policies
// });

// const store = createStore(ourDept);

// store.dispatch(createPolicy('damon', 50));
// store.dispatch(createPolicy('elena', 30));
// store.dispatch(createPolicy('stefan', 20));

// store.dispatch(createClaim('bonnie', 100));
// store.dispatch(createClaim('caroline', 50));

// store.dispatch(deletePolicy('stefan'));

// console.log(store.getState())
