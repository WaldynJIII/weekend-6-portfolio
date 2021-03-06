import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('YEET_PROJECT', postProject);
    yield takeEvery('GET_PROJECT', getProject);
    yield takeEvery('REMOVE', deleteProject);
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISPLAY':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}
function* getProject(nextAction) {

    // replaces the need for .then and .catch
    try {
        const portfolioResponse = yield axios.get('/api/portfolio');
        // same as dispatch
        console.log(portfolioResponse.data)
        const action = { type: 'SET_DISPLAY', payload: portfolioResponse.data};

        yield put(action); // trigger our reducer
    } catch (error) {
        console.log('Error making GET request', error);
        alert('there was a problem');
    }
}
function* postProject(action) {
    console.log(action.payload);
    let projectToAdd = action.payload
    try {
        console.log(projectToAdd)
        yield axios.post('/api/portfolio', projectToAdd);
        console.log(action.payload);
        const action = { type: 'GET_PROJECT' };
        yield put(action);
    } catch (error) {
        console.log('Error making POST request', error);
        alert('there was a problem. Check console logs');
    }
}
function* deleteProject(action) {
    console.log(action.payload);
    let projectToRemove = action.payload
    console.log(projectToRemove)
    try {
        yield axios.delete('/api/portfolio', projectToRemove);
        console.log(action.payload);
        const action = { type: 'GET_PROJECT' };
        yield put(action);
    } catch (error) {
        console.log('Error making Delete request', error);
        alert('there was a problem. Check console logs');
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
