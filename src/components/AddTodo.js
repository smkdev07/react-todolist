import React, { useState } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
`;

const FormElement = styled.div`
  margin-right: 1rem;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  width: 100%;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  color: ${(props) => props.theme.darkColor};
  border: 2px solid ${(props) => props.theme.lightRed};
  border-radius: 4px;
  margin: 0;
  padding: 0.5rem;
  width: 100%;

  &:focus {
    outline-color: ${(props) => props.theme.blue};
  }
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.darkColor};
  background-color: ${(props) => props.theme.blue};
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    color: ${(props) => props.theme.darkColor};
    background-color: ${(props) => props.theme.lightRed};
    transform: scale(1);
    cursor: not-allowed;
  }
`;

const AddTodo = (props) => {
  const [todo, setTodo] = useState('');

  const { submitHandler } = props;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submitHandler(todo.trim());
    setTodo('');
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <FormElement>
        <StyledLabel htmlFor="new-todo">Add New Todo</StyledLabel>
        <StyledInput
          id="new-todo"
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
      </FormElement>
      <StyledButton type="submit" disabled={!todo.trim().length}>
        Add
      </StyledButton>
    </StyledForm>
  );
};

export default AddTodo;
