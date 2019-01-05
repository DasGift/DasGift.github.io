import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import style from './css/style.css';


import Women from './catalogue/Women';
import Men from './catalogue/Men';
import Kind from './catalogue/Kind';
import NewGoods from './NewGoods';
import Actions from './Actions';
import About from './About';

class App extends Component {
	render() {
		return(
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
				            <Route path="/catalogue/:category" component={Women} />
				            <Route path="/catalogue" exact component={Women} />

				            <Route path="/catalogue/Men" component={Men} />
				            <Route path="/catalogue/Kind" component={Kind} />
				          </Switch>
					</div>
				</BrowserRouter>
				<NewGoods />
				<Actions />
				<About />
				<Footer />
			</div>
		)
	}
}

export default App;