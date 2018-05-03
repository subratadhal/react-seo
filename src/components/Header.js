'use strict';

import React from 'react';
import { Link } from 'react-router';


const Header = (props) => {

	return (
		<header>
		<nav className="navbar navbar-white navbar-fixed-top">
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
		            <li><a>Who we are</a></li>
		            <li className="dropdown">
		            	<a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
		            		Services
		            		<span className="caret"></span>
		            	</a>	                
		            </li>
		            <li><Link to="/casestudies" activeClassName="active">CASE STUDIES</Link></li>
		            <li><Link to="/blog" activeClassName="active">BLOG</Link></li>
		            <li><Link to="/contact-us" activeClassName="active">Contact Us</Link></li>
	       		</ul>
	       		
	       		<button type="button" className="hvr-sweep-to-right">Free Quote</button>

	        </div>
	      </div>
	</nav>
		
		</header>
	);

}

export default Header;
