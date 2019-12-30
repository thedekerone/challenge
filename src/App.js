import React from 'react';
import { Layout } from './components/Layout';
import { Plans } from './components/Plans';
import { PlanInfo } from './components/PlanInfo';

function App() {
	return (
		<Layout>
			<Plans />
			<PlanInfo price='50' />
		</Layout>
	);
}

export default App;
