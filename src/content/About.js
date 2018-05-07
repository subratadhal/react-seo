import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';

//import Slider from "react-slick";


export default class About extends React.Component {
	

  render() {

    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
    	<DefaultLayout>

			<Heading
				title="Productivity Application - Kanban Style Customizable Boards, Lists and Cards to make you more productive."
				subtitle="Kanban style, Trello inspired Productivity application built using the awesome React, Ant Design, Apollo Client and other fantastic libraries."
			/>

			<Col span={14} offset={5} style={{ marginTop: 40 }}>
			{/*
				<Slider {...settings}>
			        <div><h3>1</h3></div>
			        <div><h3>2</h3></div>
			        <div><h3>3</h3></div>
			        <div><h3>4</h3></div>
			        <div><h3>5</h3></div>
			        <div><h3>6</h3></div>
			      </Slider>
			  */}
			}
			</Col>

			<SEO url="about" />

		</DefaultLayout>
    );
  }
}