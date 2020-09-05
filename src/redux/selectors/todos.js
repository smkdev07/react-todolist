export const getTodoCount = (state) => {
  return state.todos.length;
};

export const getInCompleteTodoCount = (state) => {
  return state.todos.filter((todo) => !todo.completed).length;
};

export const getCompletedTodoCount = (state) => {
  return state.todos.filter((todo) => todo.completed).length;
};

export const getOrderedTodos = (state) => {
  const incompleteTodos = state.todos.filter((todo) => !todo.completed);
  const completedTodos = state.todos.filter((todo) => todo.completed);
  return [...incompleteTodos, ...completedTodos];
};
