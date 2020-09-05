import React from 'react';

import { useSelector } from 'react-redux';

import { getOrderedTodos } from '../redux/selectors/todos';
import TodoItem from './TodoItem';

import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

const TodoList = (props) => {
  const todos = useSelector((state) => getOrderedTodos(state));
  const { showSelect } = props;

  return (
    <StyledUl>
      {todos.map((todo, index) => (
        <TodoItem {...todo} showSelect={showSelect} key={index} />
      ))}
    </StyledUl>
  );
};

export default TodoList;
