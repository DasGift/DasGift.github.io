import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Main from "./Main";
import HeaderSlider from "./HeaderSlider";

class Header extends Component {
	render() {
		return(
			<header className="header">
				<div className="top-menu">
		          <div className="wrapper">
		            <ul className="top-menu__items">
		              <li className="top-menu__item">
		                <a href="#">Возврат</a>
		              </li>
		              <li className="top-menu__item">
		                <a href="#">Доставка и оплата</a>
		              </li>
		              <li className="top-menu__item">
		                <a href="#">О магазине</a>
		              </li>
		              <li className="top-menu__item">
		                <a href="#">Контакты</a>
		              </li>
		              <li className="top-menu__item">
		                <a href="#">Новости</a>
		              </li>
		            </ul>
		          </div>
		        </div>

		        <Main />

		        <nav className="main-menu">
			        <div className="wrapper">
			          <ul className="main-menu__items">
			            <li className="main-menu__item main-menu__item_sales">
			              <a href="#">Акции</a>
			            </li>
			            <li className="main-menu__item main-menu__item_women">
			              <a href="#">Женская обувь</a>
			            </li>
			            <li className="main-menu__item main-menu__item_men">
			              <a href="#">Мужская обувь</a>
			            </li>
			            <li className="main-menu__item main-menu__item_kids">
			              <a href="#">Детская обувь</a>
			            </li>
			            <li className="main-menu__item main-menu__item_accessories">
			              <a href="#">Аксессуары</a>
			            </li>
			            <li className="main-menu__item main-menu__item_home">
			              <a href="#">Для дома</a>
			            </li>
			            <li className="main-menu__item main-menu__item_brands">
			              <a href="#">Бренды</a>
			            </li>
			            <li className="main-menu__item main-menu__item_new">
			              <a href="#">Новинки</a>
			            </li>
			          </ul>
			        </div>
			    </nav>

		        <HeaderSlider />
			</header>
		)
	}
}

export default Header;