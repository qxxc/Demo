import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import sagas from './saga'
//import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    //applyMiddleware(...[thunk])
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    reducer,
    enhancer
);

sagaMiddleware.run(sagas)

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store