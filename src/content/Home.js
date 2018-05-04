'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';
import SEO from 'app/components/SEO';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';

import GoogleMapReact from 'google-map-react';


const videoSources = {
	BigData: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	BigDataPoster: 'images/Untitled-1.png', 
	BigDataText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	DataAnalysis: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	DataAnalysisPoster: 'images/Untitled-1.png',
	DigitalMarketing: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	DigitalMarketingPoster: 'images/Untitled-1.png',
	MachineLearning: 'http://media.w3.org/2010/05/video/movie_300.webm',
	MachineLearningPoster: 'images/Untitled-1.png',
};

export default class Home extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            center: {
		      lat: 59.95,
		      lng: 30.33
		    },
		    zoom: 11,
		    videoSource: videoSources['BigData'],
		    posterSource: videoSources['BigDataPoster'],
		    videoDescriptionSources: videoSources['BigDataText']
        }
        this.play = this.play.bind(this);
    }

    componentDidMount() {
	    // subscribe state change
	    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
	}

	handleStateChange(state, prevState) {
	    this.setState({
	      player: state
	    });
	  }

	  play() {
	    this.refs.player.play();
	  }

render() {

	
	
	const content = [
		{
			title: 'Big Data',
			description:'how data analysis increase your sales?',
			image: 'http://dev.spineor.com/remote-images/banner1.jpg',
		},
		{
			title: 'Data Analysis',
			description:'',
			image: 'http://dev.spineor.com/remote-images/banner2.jpg',
		},
		{
			title: 'Digital Marketing',
			description:'',		
			image: 'http://dev.spineor.com/remote-images/banner3.jpg',
		},
		{
			title: 'Machine Learning',
			description:'',
			image: 'http://dev.spineor.com/remote-images/banner4.jpg',
		}
	];

		return (
			<DefaultLayout>

				<Heading title="Hey You" />
							
				<Slider className="slider-wrapper">
					{content.map((item, index) => (
						<div
							key={index}
							className="slider-content"
							style={{ background: `url('${item.image}') no-repeat center center` }}
						>
							<div className="inner">
								<h1>{item.title}</h1>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</Slider>


				<section className="video-section">
					<div className="container">
						<div className="row">
							<div className="content-wrapper col-sm-6">
								<p>{this.state.videoDescriptionSources}</p>
								<span></span>
								<ul>
									<li onClick={this.play}><i className="fa fa-play"></i></li>
									<li><p><span>watch</span>intro video</p></li>
									
								</ul>
							</div>
							<div className="video-wrapper col-sm-6">
								<Player
									ref="player"
							        width="400"
							        height="400"
							        aspectRatio = "4:3"
							        poster={this.state.posterSource}
						        >
						  	        <source src={this.state.videoSource} />
							        <BigPlayButton position="center" />
							    </Player>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="row">
							<div className="agile-development">
								<h1>WHAT WE DO</h1>
							</div>
							<div className="col-sm-4">
								<div className="frame">
									<div className="group">
										<img src="images/Untitled-1.png"/>
									</div>
									<div className="dyanamic-web-solutions">
										<h4>DYANAMIC WEB SOLUTIONS</h4>
									</div>
									<div className="at-spineor-we-explore-learn-an">
										<p>At Spineor, we explore, learn and develop the latest trends in the website development. </p>
									</div>
									<div className="view-more">
										<a className="frame1" href="#">VIEW MORE</a>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="frame">
									<div className="group">
										<img src="images/icon2.png"/>
									</div>
									<div className="dyanamic-web-solutions">
										<h4>DATA ANALYTICS</h4>
									</div>
									<div className="at-spineor-we-explore-learn-an">
										<p>We, understand, clean and enrich your massive data. </p>
									</div>
									<div className="view-more">
										<a className="frame1" href="#">VIEW MORE</a>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="frame">
									<div className="group">
										<img src="images/icon3.png"/>
									</div>
									<div className="dyanamic-web-solutions">
										<h4>DEVOPS AND TESTING</h4>
									</div>
									<div className="at-spineor-we-explore-learn-an">
										<p>Our DevOps engineers and Quality analyst accelerate the release of applications into productions.</p>
									</div>
									<div className="view-more">
										<a className="frame1" href="#">VIEW MORE</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section>
					<div className="container">
						<div className="row">
							<div className="agile-development">
								<h1>AGILE DEVELOPMENT</h1>
							</div>
							<div className="col-sm-7 agile-wrapper">
								<div className="agile-development-image">
									 <img className="agile-image" src="images/agile_img.jpg"/>
								</div>
							</div>
							<div className="col-sm-5 we-use-wrapper">
								<div className="we-use-agile-method">
									<span>WE USE</span>
									<h6>AGILE METHODOLOGY</h6>
								</div>
								<div className="increasing-prosperity-in-our-l">
									<p>Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.</p>
								</div>
								<div className="agile-proposi">
									<img src="images/sdfs.png"/>
									<span>
										<h6>AGILE DEVLOPMENT</h6>
										VALUE PROPOSITIO
									</span>
									
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section  className="w-c-section">
					<div className="container">
						<div className="row">
							<div className="what-we-can-do-for-you">
								<h1>WHAT WE CAN DO FOR YOU</h1>
							</div>
							<div className="col-sm-6 col-md-4 remove ">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/webdev.png"/></span>
										<span>Web Development</span>
									</div>
									<div className="Our-developers-build-not">
										<p>Our developers build not only attractive but simple 
										and user-friendly solutions to your eCommerce 
										business along with massive database management. 
										The team understands the demands of the project 
										may it be minor or major.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 remove">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/resful_api.png"/></span>
										<span>Restful APIs</span>
									</div>
									<div className="Our-developers-build-not">
										<p>We offer API integration and development services to suit the web and mobile application development requirements of the clients.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 remove">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/React.png"/></span>
										<span>Reactive Applications</span>
									</div>
									<div className="Our-developers-build-not">
										<p>We offer API integration and development services to suit the web and mobile application development requirements of the clients.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 remove">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/Mean.png"/></span>
										<span>Full/Mean stack development</span>
									</div>
									<div className="Our-developers-build-not">
										<p>We are working exceptionally well for integrating advanced online designing technologies like Angular JS/NodeJS/ExpressJS/REACT JS. We are well-versed with administrating databases like MongoDB/Cassandra/</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 remove">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/Third_party.png"/></span>
										<span>Third Party Integrations</span>
									</div>
									<div className="Our-developers-build-not">
										<p>We offer seamless and tricky third party integrations – Twitter and Coveritlive. Our Product Managers are constantly on the look-out for new apps, technical advances and trends – judging their suitability for inclusion into Sunshine.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 remove">
								<div className="Web-Development-heading">
									<div className="Web-Development">
										<span><img src="images/mACHINE.png"/></span>
										<span>Machine Learning</span>
									</div>
									<div className="Our-developers-build-not">
										<p>Our Data Scientists take the time to train the data into information, and information into insight. Our robust data analysis can increase your business productivity by turning raw data to better inform business decisions.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="row">
							<div className="OUR-WORK">
								<h1>OUR WORK</h1>
							</div>
							<div className="col-sm-6">
								<div className="industries-we-cater">
									<h4>Industries we cater</h4>
								</div>
								<div className="our-work-list">
									<ul className="our-work-list-content">
										<li><a href="">Hospitality</a></li>
										<li><a href="">Finance</a></li>
										<li><a href="">Retail</a></li>
										<li><a href="">Healthcare</a></li>
									</ul>
								</div>
								<div className="view-project">
									<a className="frame2" href="#">VIEW MORE <i className="fa fa-long-arrow-right"></i></a>
								</div>
								<div className="see-all-project">
									<a href="">SEE ALL PROJECT</a>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="OUR-WORK-image">
									 <img className="work-image" src="images/project_Img.png"/>
									 <span className="project-Logo"><img src="images/project_Logo.png"/></span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="row">
							<div className="our-process">
								<h1>OUR PROCESS</h1>
							</div>
							<div className="col-sm-4">
								<div className="our-process-image">
									<img src="images/process_icon1.png"/>
								</div>
								<div className="consulting">
									<h4>01</h4>
									<h6>CONSULTING</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="our-process-image">
									<img src="images/process_icon2.png"/>
								</div>
								<div className="consulting">
									<h4>02</h4>
									<h6>BUSINESS PROCESS</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="our-process-image">
									<img src="images/process_icon3.png"/>
								</div>
								<div className="consulting">
									<h4>03</h4>
									<h6>INNOVATIONS</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</div>
							</div>
						</div>
					</div>
				</section>
						
				<section className="testimonials-section">
					<div className="container">
						<div className="row">
							<div className="what-our-client">
								<h1>WHAT OUR CLIENTS SAY</h1>
							</div>
							<div className="slider-images">
								<img src="images/quote_icon.png"/>
							</div>
							
							<div className="my-slider">
				    			<div className="item">
				    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
				    				<ul>
					    				<li>
					    					<span className="img-slide">
					    						<img src="images/67.jpg"/>
					    					</span>
					    				</li>
					    				<li>
					    					<h3>Tom Bossworth</h3>
					    					<p>Art Director, <span>Design Company</span></p>
					    				</li>
					    			</ul>
					    		</div>
					    		<div className="item">
				    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
				    				<ul>
					    				<li>
					    					<span className="img-slide">
					    						<img src="images/67.jpg"/>
					    					</span>
					    				</li>
					    				<li>
					    					<h3>Tom Bossworth</h3>
					    					<p>Art Director, <span>Design Company</span></p>
					    				</li>
					    			</ul>
					    		</div>
					    		<div className="item">
				    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
				    				<ul>
					    				<li>
					    					<span className="img-slide">
					    						<img src="images/67.jpg"/>
					    					</span>
					    				</li>
					    				<li>
					    					<h3>Tom Bossworth</h3>
					    					<p>Art Director, <span>Design Company</span></p>
					    				</li>
					    			</ul>
					    		</div>
					    		<div className="item">
				    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
				    				<ul>
					    				<li>
					    					<span className="img-slide">
					    						<img src="images/67.jpg"/>
					    					</span>
					    				</li>
					    				<li>
					    					<h3>Tom Bossworth</h3>
					    					<p>Art Director, <span>Design Company</span></p>
					    				</li>
					    			</ul>
					    		</div>
					    		<div className="item">
				    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
				    				<ul>
					    				<li>
					    					<span className="img-slide">
					    						<img src="images/67.jpg"/>
					    					</span>
					    				</li>
					    				<li>
					    					<h3>Tom Bossworth</h3>
					    					<p>Art Director, <span>Design Company</span></p>
					    				</li>
					    			</ul>
					    		</div>
					  		</div>
						</div>
					</div>
				</section>

				<div className="technologies">
			    	<div className="container-fluid">
				    	<div className="row">
				    		<div className="simply-scroll simply-scroll-container">
								<div className="simply-scroll-btn simply-scroll-btn-pause"></div>
								<div className="simply-scroll-clip">
								{/*
									<ul id="scroller"  className="simply-scroll-list">
					 	    			<li><img src="images/wordpress.png" alt="Wordpress"/></li>
					        			<li><img src="images/php.png" alt="PHP"/></li>
					        			<li><img src="images/angular.png" alt="Angular"/></li>
					        			<li><img src="images/carephp.png" alt="Carephp"/></li>
					        			<li><img src="images/codelgniter.png" alt="Codelgniter"/></li>
					        			<li><img src="images/node.png" alt="Node"/></li>
					            		<li><img src="images/shopify.png" alt="Shopify"/></li>
					            		<li><img src="images/react-logo.png" alt="React"/></li>
					            		<li><img src="images/node.png" alt="Node"/></li>
					            		<li><img src="images/shopify.png" alt="Shopify"/></li>
					            		<li><img src="images/react-logo.png" alt="React"/></li>
					            	</ul>
					            */}
				            	</div>
				        	</div> 
						</div>
			    	</div>
			    </div>

				<section>
					<div className="container text-center">
						<div className="row">
							<div className="lets-get">
								<h4>Let’s Get Started</h4>
								<p>We need to learn more about your idea so we can marry it with our technical knowledge and help you come up with a winning product strategy. Push the button to let us know the 
								details, and our mobile experts will get back to you soon.</p>
								<a href="#" className="get-a-free">get a free quote</a>
							</div>
						</div>
					</div>
				</section>	

				<section>
					<div className="container">
						<div className="get-in-section">
								<div className="get-in-touch">
									<h1>GET IN TOUCH</h1>
								</div>
								<div className="col-sm-6">
									<form action="">
										<div className="form-group">
				      						
				      						<input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
				    					</div>
				    					<div className="form-group">
				      						
				      						<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				    					</div>
				    					<div className="form-group">
				     		 				
				      						<input type="text" className="form-control" id="phone" placeholder="Phone" name="phone"/>
				    					</div>
				    					<div className="form-group">
				      						
				      						<textarea className="form-control" rows="5" id="comment">Message</textarea>
				    					</div>
				    					<button type="submit" className="btn submit-btn">SEnd message</button>
				    				</form>
								</div>
								<div className="col-sm-6">
									<div className="map">
										<GoogleMapReact
								          bootstrapURLKeys={{key:'AIzaSyCHk9ydWP42_dQOGTLbBRKy336La-RXNaY'}}
								          defaultCenter={this.props.center}
								          defaultZoom={this.props.zoom}
								        >
								          
								        </GoogleMapReact>
									</div>
								</div>
								<div className="inner-wrapper">
									<div className="inner-row">
										<ul>
											<li>
												<div className="location">
													<span id="in-img"><img src="images/Contact_big_icon1_blue.png"/></span>
													<p><span>Location:</span>
													E-261, IT TOWER, Airport<br/>Road, Mohali (PB)</p>
												</div>
											</li>
											<li>
												<div className="location">
													<span id="in-img"><img src="images/Contact_big_icon2_blue.png"/></span>
													<p><span>Email:</span>info@spineor.com</p>
													
												</div>
											</li>
											<li>
												<div className="location">
													<span id="in-img"><img src="images/Contact_big_icon3_blue.png"/></span>
													<p><span>Phone:</span>0172-5058146<br/>91-99150-21146</p>
													
												</div>
											</li>
											<li>
												<div className="location">
													<span id="in-img"><img src="images/Contact_big_icon4_blue.png"/></span>
													<p><span>Skype:</span>
													Spineor-web-Services</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
						</div>
					</div>
				</section>
			

				<SEO url="home" />

			</DefaultLayout>
		);

	}

}