import { createStore } from 'redux';

import todosReducer from './reducers/todos';

const rootReducer = todosReducer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
