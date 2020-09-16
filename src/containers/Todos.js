import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeSelectedTodos } from '../redux/actions/todos';
import { getTodoCount } from '../redux/selectors/todos';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.darkColor};
  height: 100%;
  width: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
`;

const StyledH3 = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.darkColor};
  margin: 0;
  padding: 0;
  width: 50%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.lightColor};
  background-color: ${(props) => props.theme.red};
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Todos = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const todosCount = useSelector((state) => getTodoCount(state));
  const dispatch = useDispatch();

  const onAddTodo = (value) => {
    dispatch(addTodo(value));
  };

  const onDeleteTodos = () => {
    if (deleteStatus) {
      dispatch(removeSelectedTodos());
    }
    setDeleteStatus((prevState) => !prevState);
  };

  return (
    <StyledMain>
      <AddTodo submitHandler={onAddTodo} />
      <StyledSection>
        <StyledH3>My Todos</StyledH3>
        <StyledButton disabled={!todosCount} onClick={onDeleteTodos}>
          {deleteStatus ? 'Delete Todos' : 'Select Todos'}
          <span className="material-icons" style={{ marginLeft: '0.5rem' }}>
            delete
          </span>
        </StyledButton>
      </StyledSection>
      <TodoList showSelect={deleteStatus} />
    </StyledMain>
  );
};

export default Todos;
