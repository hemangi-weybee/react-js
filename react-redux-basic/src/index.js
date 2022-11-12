// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



/*

////Basic

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore  =  redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

console.log('hii')

const initialState = {
  noOfCake: 10,
  noOfIcecream: 20
}

const initialCookieState = {
  noOfCookie: 15
}

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const BUY_COOKIE = 'BUY_COOKIE'

//// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Buy cake action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: 'Buy Icecream action'
  }
}

function buyCookie() {
  return {
    type: BUY_COOKIE,
    info: 'Buy cookie action'
  }
}

//// REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      noOfCake: state.noOfCake - 1
    }
    case BUY_ICECREAM: return {
      ...state,
      noOfIcecream: state.noOfIcecream - 1
    }
    default: return state
  }
}

const cookieReducer = (state= initialCookieState, action) => {
  switch(action.type) {
    case BUY_COOKIE: return {
      ...state,
      noOfCookie: state.noOfCookie - 1
    }
    default: return state
  }
}

// const store = createStore(reducer)
const rootReducers = combineReducers({
  reducer, cookie: cookieReducer
})

const newStore = createStore(rootReducers, applyMiddleware(logger))

// console.log('Initial State', newStore.getState())

const unsubscribe = newStore.subscribe(() => {})

newStore.dispatch(buyCake())
newStore.dispatch(buyIcecream())
newStore.dispatch(buyCookie())

unsubscribe()
*/



//// Async Function 


const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}


const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.name)
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                const msg = err.message
                dispatch(fetchUserFailure(msg))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUser())
