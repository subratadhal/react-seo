import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';


export default class About extends React.Component {
	

  render() {

  
    return (
    	<DefaultLayout>

			<Heading
				title="Productivity Application - Kanban Style Customizable Boards, Lists and Cards to make you more productive."
				subtitle="Kanban style, Trello inspired Productivity application built using the awesome React, Ant Design, Apollo Client and other fantastic libraries."
			/>

			about

			<SEO url="about" />

		</DefaultLayout>
    );
  }
}