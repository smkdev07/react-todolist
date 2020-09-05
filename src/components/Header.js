import React from 'react';

import { useSelector } from 'react-redux';
import {
  getInCompleteTodoCount,
  getCompletedTodoCount,
} from '../redux/selectors/todos';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  width: 95%;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) =>
    props.textColor === 'green'
      ? props.theme.green
      : props.textColor === 'blue'
      ? props.theme.blue
      : props.theme.darkColor};
  margin: 0;
  padding: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Header = ({ appName }) => {
  const inCompleteTodoCount = useSelector((state) =>
    getInCompleteTodoCount(state)
  );
  const completedTodoCount = useSelector((state) =>
    getCompletedTodoCount(state)
  );
  return (
    <StyledHeader>
      <StyledH1>{appName}</StyledH1>
      <StyledDiv>
        <StyledH1 textColor="blue" style={{ marginRight: '2rem' }}>
          <span className="material-icons">pending</span> {inCompleteTodoCount}
        </StyledH1>
        <StyledH1 textColor="green">
          <span className="material-icons">done</span>
          {completedTodoCount}
        </StyledH1>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
