import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Table } from './components/Table';
import { DocForm } from './components/DocForm';

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
			<Router>
				<div>
					<Route path="/" exact={true} name="createUser" component={Table} />
					<Route path="/create-user" exact={true} name="createUser" component={DocForm} />
				</div>
			</Router>
		</CenteredApp>
	);
}
	
export default App;
	