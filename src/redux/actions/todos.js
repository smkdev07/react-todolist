import { ADD_TODO, REMOVE_TODOS, TOGGLE_TODO_STATUS } from './actionTypes';

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: {
      createdOn: new Date(),
      description,
      completed: false,
      selected: false,
    },
  };
};

export const removeSelectedTodos = () => {
  return {
    type: REMOVE_TODOS,
  };
};

export const toggleTodoStatus = (todoCreatedOn, statusToUpdate) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: { todoCreatedOn, statusToUpdate },
  };
};
