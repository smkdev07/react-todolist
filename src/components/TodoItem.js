import React from 'react';

import { useDispatch } from 'react-redux';

import { toggleTodoStatus } from '../redux/actions/todos';

import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.lightColor};
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0.5rem 0;
  padding: 1rem 0.5rem;
  width: 90%;

  &:hover {
    background-color: #eee;
  }

  @media (min-width: 425px) {
    padding: 1rem;
  }
`;

const StyledInput = styled.input`
  display: ${(props) => (props.show ? 'inline' : 'none')};
  height: 20px;
  width: 10%;

  @media (min-width: 425px) {
    width: 20px;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.darkColor};
  margin: 0;
  padding: 0;
  width: 25%;
  overflow-wrap: break-word;

  @media (min-width: 425px) {
    width: 33%;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.lightColor};
  background-color: ${(props) =>
    props.completed ? props.theme.blue : props.theme.green};
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem;
  width: 35%;
  cursor: pointer;

  @media (min-width: 425px) {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    width: auto;
  }
`;

const TodoItem = (props) => {
  const { createdOn, description, completed, selected, showSelect } = props;
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    dispatch(toggleTodoStatus(createdOn, 'selected'));
  };

  const onClickHandler = () => {
    dispatch(toggleTodoStatus(createdOn, 'completed'));
  };

  return (
    <StyledLi completed={completed}>
      <StyledInput
        type="checkbox"
        checked={selected}
        onChange={onChangeHandler}
        show={showSelect}
      />
      <StyledP>{description}</StyledP>
      <StyledP>{createdOn.toLocaleString()}</StyledP>
      <StyledButton onClick={onClickHandler} completed={completed}>
        {completed ? 'Incomplete' : 'Complete'}
        {completed ? (
          <span className="material-icons" style={{ marginLeft: '0.5rem' }}>
            pending
          </span>
        ) : (
          <span className="material-icons" style={{ marginLeft: '0.5rem' }}>
            done
          </span>
        )}
      </StyledButton>
    </StyledLi>
  );
};

export default TodoItem;
