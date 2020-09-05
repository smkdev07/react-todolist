import {
  ADD_TODO,
  REMOVE_TODOS,
  TOGGLE_TODO_STATUS,
} from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const addTodo = (state, action) => {
  return {
    ...state,
    todos: [...state.todos, action.payload],
  };
};

const removeTodos = (state, action) => {
  return {
    ...state,
    todos: state.todos.filter((todo) => !todo.selected),
  };
};

const toggleTodoStatus = (state, action) => {
  const todoIndex = state.todos.findIndex(
    (todo) => todo.createdOn === action.payload.todoCreatedOn
  );
  const updatedTodo = { ...state.todos[todoIndex] };
  if (action.payload.statusToUpdate === 'selected') {
    updatedTodo.selected = !updatedTodo.selected;
  } else {
    updatedTodo.completed = !updatedTodo.completed;
  }
  const updatedTodoList = [...state.todos];
  updatedTodoList[todoIndex] = updatedTodo;
  return {
    ...state,
    todos: updatedTodoList,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case REMOVE_TODOS:
      return removeTodos(state, action);
    case TOGGLE_TODO_STATUS:
      return toggleTodoStatus(state, action);
    default:
      return state;
  }
};

export default reducer;
