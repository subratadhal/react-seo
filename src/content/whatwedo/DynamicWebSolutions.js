import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';


export default class DynamicWebSolutions extends React.Component {
	

  render() {

  
    return (
    	<DefaultLayout>

			<section>
				<div className="container">
					<div className="row">
						<div className="">
							<h1>DynamicWebSolutions</h1>
						</div>
						<div className="col-sm-12">
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							DynamicWebSolutions
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
						</div>
					</div>
				</div>
			</section>
			<SEO url="about" />

		</DefaultLayout>
    );
  }
}