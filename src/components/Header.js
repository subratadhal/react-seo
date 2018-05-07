'use strict';

import React from 'react';
import { Link } from 'react-router';

import $ from "jquery";
window.$ = window.jQuery=$;

export default class Header extends React.Component {
	constructor(props) {
    super(props);
	    this.state = {
	      header: ''
	    };
	}
  	componentDidMount() {
    	document.addEventListener('scroll', () => {
		    if (window.scrollY < 100) {
		        this.setState({ header: 'transparent' }); 
		    }else{
		    	this.setState({ header: '#184A88' });
		    }
	    });
	    $('.dropdown-toggle').on('click',function(e){
	    	e.stopPropagation();
	    	if($(this).parent().hasClass('copen')){
	    		$(this).parent().removeClass('copen');
	    		$(this).parent().removeClass('cactive');
	    	}else{
	    		$('ul.nav > li.dropdown').removeClass('cactive').removeClass('copen');
	    		$(this).parent().addClass('copen');
	    		$(this).parent().addClass('cactive');
	    	}
	    });
	    $("body").click(function(){
		  $(".nav > li.dropdown").removeClass("copen").removeClass('cactive');
		});
  	}
  render() {
  	const style = {
  		'background': this.state.header
  	}
    return (
		<header>
			<nav className="navbar navbar-white navbar-fixed-top" style={style} >
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span> 
		            <span className="icon-bar"></span> 
		          </button>
		         <a className="navbar-brand" ><img src="images/logo.png" alt="logo"/></a>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse navbar-right main-nav">
		          	<ul className="nav navbar-nav custom-nav">

			            <li className="active"><Link to="/">Home</Link></li>
			            <li  className="dropdown">
			            	<a className="dropdown-toggle" >
			            		Who we are
			            		<span className="caret"></span>
			            	</a>
			            	<ul className="dropdown-container dropdown-list">
			            		<li><Link to="/about">ABOUT US</Link></li>
			            		<li><Link to="/our-process">OUR PROCESS</Link></li>
			            		<li><Link to="/careers">CAREERS</Link></li>
			            	</ul>
			            </li>
			            <li className="dropdown">
			            	<a className="dropdown-toggle" >
			            		Services
			            		<span className="caret"></span>
			            	</a>
			            	<ul className="dropdown-container dropdown-list-big">
			            		<li><Link to="/about">WEBSITE DEVELOPMENT</Link></li>
			            		<li><Link to="/about">RESTFULL APIS</Link></li>
			            		<li><Link to="/about">REACTIVE APPLICATIONS</Link></li>
			            		<li><Link to="/about">FULL MEAN STACK DEVELOPMENT</Link></li>
			            		<li><Link to="/about">THIRD PARTY INTEGRATIONS</Link></li>
			            		<li><Link to="/about">MACHINE LEARNING</Link></li>
			            	</ul>
			            </li>
			            <li><Link to="/casestudies" >CASE STUDIES</Link></li>
			            <li><Link to="/blog">BLOG</Link></li>
			            <li><Link to="/contact-us">Contact Us</Link></li>
		       		</ul>
		       		<button type="button" className="hvr-sweep-to-right">Free Quote</button>
		        </div>
		      </div>
			</nav>
			
		</header>
  	);
  }
}

