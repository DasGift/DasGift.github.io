import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../img/header-logo.png";

const Main = () => {
  return (
    <div className="header-main">
      <div className="header-main__wrapper wrapper">
        <div className="header-main__phone">
          <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
          <p>Ежедневно: с 09-00 до 21-00</p>
        </div>
        <div className="header-main__logo">
          <a href="#">
            <h1>
              <img src={headerLogo} alt="logotype" />
            </h1>
          </a>
          <p>Обувь и аксессуары для всей семьи</p>
        </div>
        <div className="header-main__profile">
          <div className="header-main__pics">
            <div className="header-main__pic header-main__pic_search">

            </div>
            <div className="header-main__pic_border"></div>
            <div className="header-main__pic header-main__pic_profile">
              <div className="header-main__pic_profile_menu"></div>
            </div>
            <div className="header-main__pic_border"></div>
            <div className="header-main__pic header-main__pic_basket">
              <div className="header-main__pic_basket_full">1</div>
              <div className="header-main__pic_basket_menu"></div>
            </div>
          </div>
          
        </div>

      </div>
      <div className="header-main__hidden-panel hidden-panel">
        <div className="wrapper">
          <div className="hidden-panel__profile">
            <a href="#">Личный кабинет</a>
            <a href="favorite.html">
              <i className="fa fa-heart-o" aria-hidden="true"></i>Избранное</a>
            <a href="#">Выйти</a>
          </div>
          <div className="hidden-panel__basket basket-dropped">
            <div className="basket-dropped__title">В вашей корзине:</div>
            <div className="basket-dropped__product-list product-list">
              <div className="product-list__item">
                <a className="product-list__pic">
                  <img src="img/product-list__pic_1.jpg" alt="product" /> </a>
                <a href="#" className="product-list__product">Ботинки женские, Baldinini</a>
                <div className="product-list__fill"></div>
                <div className="product-list__price">12 360
                  <i className="fa fa-rub" aria-hidden="true"></i>
                </div>
                <div className="product-list__delete">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>

              <div className="product-list__item">
                <a className="product-list__pic">
                  <img src="img/product-list__pic_1.jpg" alt="product" /> </a>
                <a href="#" className="product-list__product">Ботинки женские, Baldinini</a>
                <div className="product-list__fill"></div>
                <div className="product-list__price">12 360
                  <i className="fa fa-rub" aria-hidden="true"></i>
                </div>
                <div className="product-list__delete">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <div className="product-list__item">
                <a className="product-list__pic">
                  <img src="img/product-list__pic_1.jpg" alt="product" /> </a>
                <a href="#" className="product-list__product">Ботинки женские, Baldinini</a>
                <div className="product-list__fill"></div>
                <div className="product-list__price">12 360
                  <i className="fa fa-rub" aria-hidden="true"></i>
                </div>
                <div className="product-list__delete">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <div className="product-list__item">
                <a className="product-list__pic">
                  <img src="img/product-list__pic_1.jpg" alt="product" /> </a>
                <a href="#" className="product-list__product">Ботинки женские, Baldinini</a>
                <div className="product-list__fill"></div>
                <div className="product-list__price">12 360
                  <i className="fa fa-rub" aria-hidden="true"></i>
                </div>
                <div className="product-list__delete">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>

            </div>
            <a className="basket-dropped__order-button" href="order.html">Оформить заказ</a>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Main;
