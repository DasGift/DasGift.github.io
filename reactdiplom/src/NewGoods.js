import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styleFavorite from './css/style-favorite.css';


import slider from "./img/slider.jpg";
import slider180deg from "./img/slider180deg.jpeg";



class NewGoods extends Component {

	constructor(props) {
		super(props);
		this.favoriteGoods = this.favoriteGoods.bind(this); 

		this.state = {
			isClick: false
		}

	}

	favoriteGoods() {
		if(!this.state.isClick) {
			this.setState({
				isClick: true
			})
		} else {
			this.setState({
				isClick: false
			})
		}
	}

	render() {
		return(
			<section className="new-deals wave-bottom">
		      <h2 className="h2">Новинки</h2>
		      <div className="new-deals__menu">
		        <ul className="new-deals__menu-items">
		          <li className="new-deals__menu-item new-deals__menu-item_active">
		            <a href="#">Женская обувь</a>
		          </li>
		          <li className="new-deals__menu-item">
		            <a href="#">Мужская обувь</a>
		          </li>
		          <li className="new-deals__menu-item">
		            <a href="#">Детская обувь</a>
		          </li>
		          <li className="new-deals__menu-item">
		            <a href="#">аксессуары</a>
		          </li>
		          <li className="new-deals__menu-item">
		            <a href="#">для дома</a>
		          </li>
		        </ul>
		      </div>
		      <div className="new-deals__slider">
		        <div className="new-deals__arrow new-deals__arrow_left arrow"></div>
		        <div className="new-deals__product new-deals__product_first">
		          <a href="#"></a>
		        </div>

		        <div className="new-deals__product new-deals__product_active">
		          <a href="catalogue.html"></a>
		          <div className={!this.state.isClick ? 'new-deals__product_favorite' : 'product-catalogue__product_favorite'} onClick={this.favoriteGoods}></div>
		        </div>
		        <div className="new-deals__product new-deals__product_last">
		          <a href="#"></a>
		        </div>
		        <div className="new-deals__arrow new-deals__arrow_right arrow"></div>
		      </div>
		      <div className="new-deals__product-info">
		        <a href="product-card-desktop.html" className="h3">Босоножки женские</a>
		        <p>Производитель:
		          <span>Damlax</span>
		        </p>
		        <h3 className="h3">5 950 ₽</h3>
		      </div>
		    </section>
		)
	}
}

export default NewGoods;