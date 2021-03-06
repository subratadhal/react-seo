import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';


export default class WebsiteDevelopment extends React.Component {
	

  render() {

  
    return (
    	<DefaultLayout>

			<section>
				<div className="container">
					<div className="row">
						<div className="">
							<h1>About</h1>
						</div>
						<div className="col-sm-12">
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							website-development
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

			<SEO url="website-development" />

		</DefaultLayout>
    );
  }
}