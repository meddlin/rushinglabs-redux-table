import React from 'react';
import { Table } from './components/Table';
import styled from 'styled-components';

const CenteredApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const App = () => {
  return (
    <CenteredApp className="App">
      <Table />

      <button>Create New</button>
    </CenteredApp>
  );
}

export default App;
