import React from 'react';
import Home from './components/Home';
import Quizes from './components/Quizes';
import { Switch, Route, useLocation } from 'react-router-dom';
const App = () => {
	const location = useLocation();
	return (
		<div className="app">
			<Switch location={location} key={location.pathname}>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/quiz" exact>
					<Quizes />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
