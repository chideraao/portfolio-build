import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Pages/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" component={Home} exact />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
