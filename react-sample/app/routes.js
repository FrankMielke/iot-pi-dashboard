const React = window.React;
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
// import Config from './containers/Config';
import Dashboard from './components/Dashboard';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="/dashboard" component={Dashboard} />
	</Route>
);
