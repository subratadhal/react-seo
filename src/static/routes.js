'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home 			from 'app/content/Home';

import About 			from 'app/content/whoweare/About';
import Careers 			from 'app/content/whoweare/Careers';
import OurProcess 		from 'app/content/whoweare/OurProcess';

import WebsiteDevelopment 		from 'app/content/services/WebsiteDevelopment';
import RestfullApis 			from 'app/content/services/RestfullApis';
import ReactiveApplications 	from 'app/content/services/ReactiveApplications';
import FullMeanStackDevelopment from 'app/content/services/FullMeanStackDevelopment';
import ThirdPartyIntegrations 	from 'app/content/services/ThirdPartyIntegrations';
import MachineLearning 			from 'app/content/services/MachineLearning';

import DataAnalytics 			from 'app/content/whatwedo/DataAnalytics';
import DevopsAndTesting 		from 'app/content/whatwedo/DevopsAndTesting';
import DynamicWebSolutions 		from 'app/content/whatwedo/DynamicWebSolutions';

import Features 		from 'app/content/Features';
import ContactUs 		from 'app/content/ContactUs';
import PageNotFound 	from 'app/content/PageNotFound';

const routes = (
	<Route path='/'>
		<IndexRoute component={ Home } />
	    
	    <Route path='who-we-are/about' component={ About } />
	    <Route path='who-we-are/careers' component={ Careers } />
	    <Route path='who-we-are/our-process' component={ OurProcess } />

	    <Route path='service/website-development' component={ WebsiteDevelopment } />
	    <Route path='service/restfull-apis' component={ RestfullApis } />
	    <Route path='service/reactive-applications' component={ ReactiveApplications } />
	    <Route path='service/full-mean-stack-development' component={ FullMeanStackDevelopment } />
	    <Route path='service/third-party-integrations' component={ ThirdPartyIntegrations } />
	    <Route path='service/machine-learning' component={ MachineLearning } />

	    <Route path='what-we-do/data-analytics' component={ DataAnalytics } />
	    <Route path='what-we-do/devops-and-testing' component={ DevopsAndTesting } />
	    <Route path='what-we-do/dynamic-web-solutions' component={ DynamicWebSolutions } />

	    <Route path='features' component={ Features } />
	    <Route path='contact-us' component={ ContactUs } />
		<Route path='*' component={ PageNotFound } />
	</Route>
);

export default routes;

