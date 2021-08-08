import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Logo from '../assets/media/myoffice-logo.jpg';
import { Link } from 'react-router-dom';
import 'react-jquery-plugin';
import $ from "jquery";


function Header() {
    useEffect(() => {
        $('.navbar-toggler').click(() => {
            $('.navbar-toggler').toggleClass('navbar-open');
            $('.navbar-collapse').toggleClass('mobile-menu-opened');
            $('.site-header').toggleClass('change_header');
            $('.navbar-collapse').slideToggle();
            $('.mobileHeader .navbarToggle').addClass('fade-in');
            $('.mobileHeader .navbarToggle').addClass('fade-in');
            $('.mobileHeader .searchBarMobile').addClass('fade-in');
            $('#mobileMenu').addClass('fade-in');
            $('.footerSocialIcons').addClass('fade-in');
          });
          $(function() {
            var header = $(".Header");
              $(window).scroll(function() {    
                  var scroll = $(window).scrollTop();
                  if (scroll >= 200) {
                      header.removeClass('nav-down').addClass("nav-up");
                  } else {
                      header.removeClass("nav-up").addClass('nav-down');
                  }
              });
          });
      });
    return(
        <header className="Header">
          <div className="container">
            <div className="row justify-content-between align-items-center mobileMenuPadding">
              <div className="col-10 col-xl-2 col-lg-2 col-md-3 col-sm-2 text-left">
                <Link className="navbar-brand mr-0" to="/">
                    <img className="p-0" src={Logo} alt=""></img>
                </Link>
              </div>
              <div className="d-none col-xl-6 col-lg-7 col-md-7 col-sm-10 mt-0 mt-sm-0 align-items-center justify-content-center d-md-flex">
                <div className="d-none d-md-flex">
                  <div className="menu-primary-container">
                    <Navbar/>
                  </div>
                </div>
              </div>
              <div className="col-2 col-sm-1 col-md-2 col-lg-3 col-xl-2 d-flex justify-content-end">
                <button className="navbar-toggler d-inline-block d-md-none" type="button" data-toggle="collapse" data-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-none d-md-flex header_right pt-2 pb-2 justify-content-end">
                  <Link to="#">Contact Us</Link>
                </div>
              </div>
            </div>
            
            
            <div className="mobileHeader" style={{display: `none`}}>
              <div className="row navbarToggle" style={{animationDelay: `300ms`}}>
                <div className="col-6">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="col-6 phoneLinkMobile" style={{animationDelay: `500ms`}}>
                  <Link to="#"></Link>
                </div>
              </div>
              <div className="searchBarMobile mt-5" style={{animationDelay: `700ms`}}>
                <input type="text" placeholder="Search..."></input>
              </div>
              <div id="mobileMenu" className="collapse navbar-collapse justify-content-between position-relative mt-4" style={{animationDelay: `900ms`}}>
                <nav className="navbar navbar-expand-sm">
                <div className="menu-primary-container">
                  <Navbar/>    
                </div>
                </nav>
              </div>
              <div className="footerSocialIcons HeaderSocialIcons" style={{animationDelay: `1.1s`}}>
                <div className="row align-items-center">
                  <div className="col-9">
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </div>
                  <div className="col-3 WhatsappHeader text-end">
                  <Link to="#"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}

export default Header;