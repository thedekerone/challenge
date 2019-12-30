import React, { useContext, useState } from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Billing } from './pages/Billing';
import { Congrats } from './pages/Congrats';
import { ThemeContext } from 'styled-components';

function App() {
	const [
		standard,
		setStandard
	] = useState(true);
	const [
		user,
		setUser
	] = useState('username');
	return (
		<ThemeContext.Provider
			value={{
				standard    : standard,
				user        : user,
				setStandard : setStandard,
				setUser     : setUser
			}}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/billing'>
							<Billing />
						</Route>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/congrats'>
							<Congrats />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;
