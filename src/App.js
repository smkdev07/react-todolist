import React from 'react';

import Header from './components/Header';
import Todos from './containers/Todos';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <StyledDiv>
      <Header appName="Todo List" />
      <Todos />
    </StyledDiv>
  );
};

export default App;
