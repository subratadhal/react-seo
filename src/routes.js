'use strict';

import DynamicImport from 'app/components/DynamicImport';

const WebsiteRoutes = {
	childRoutes: [

		{
			path: '/',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "home" */'app/content/Home'),
						cb,
						'home'
					);
				}
			},
		},
		{
			path: 'who-we-are/about',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "about" */'app/content/whoweare/About'),
						cb,
						'who-we-are/about'
					);
				}
			},
		},
		{
			path: 'who-we-are/careers',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "careers" */'app/content/whoweare/Careers'),
						cb,
						'who-we-are/careers'
					);
				}
			},
		},
		{
			path: 'who-we-are/our-process',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "OurProcess" */'app/content/whoweare/OurProcess'),
						cb,
						'who-we-are/our-process'
					);
				}
			},
		},
		{
			path: 'service/website-development',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "WebsiteDevelopment" */'app/content/services/WebsiteDevelopment'),
						cb,
						'service/website-development'
					);
				}
			},
		},
		{
			path: 'service/restfull-apis',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "RestfullApis" */'app/content/services/RestfullApis'),
						cb,
						'service/restfull-apis'
					);
				}
			},
		},
		{
			path: 'service/reactive-applications',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "ReactiveApplications" */'app/content/services/ReactiveApplications'),
						cb,
						'service/reactive-applications'
					);
				}
			},
		},
		{
			path: 'service/full-mean-stack-development',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "FullMeanStackDevelopment" */'app/content/services/FullMeanStackDevelopment'),
						cb,
						'service/full-mean-stack-development'
					);
				}
			},
		},
		{
			path: 'service/third-party-integrations',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "ThirdPartyIntegrations" */'app/content/services/ThirdPartyIntegrations'),
						cb,
						'service/third-party-integrations'
					);
				}
			},
		},
		{
			path: 'service/machine-learning',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "MachineLearning" */'app/content/services/MachineLearning'),
						cb,
						'service/machine-learning'
					);
				}
			},
		},
		{
			path: 'what-we-do/data-analytics',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "DataAnalytics" */'app/content/whatwedo/DataAnalytics'),
						cb,
						'what-we-do/data-analytics'
					);
				}
			},
		},
		{
			path: 'what-we-do/devops-and-testing',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "DevopsAndTesting" */'app/content/whatwedo/DevopsAndTesting'),
						cb,
						'what-we-do/devops-and-testing'
					);
				}
			},
		},
		{
			path: 'what-we-do/dynamic-web-solutions',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "DynamicWebSolutions" */'app/content/whatwedo/DynamicWebSolutions'),
						cb,
						'what-we-do/dynamic-web-solutions'
					);
				}
			},
		},
		{
			path: 'features',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "features" */'app/content/Features'),
						cb,
						'features'
					);
				}
			},
		},
		{
			path: 'contact-us',
			indexRoute: {
				getComponent(location, cb) {
					DynamicImport(
						import(/* webpackChunkName: "contact-us" */'app/content/ContactUs'),
						cb,
						'contact-us'
					);
				}
			},
		},
		{
			path: '*',
			getComponent(location, cb) {
				DynamicImport(
					import(/* webpackChunkName: "page-not-found" */'app/content/PageNotFound'),
					cb,
					'page-not-found'
				);
			}
		},

	],
};

export default WebsiteRoutes;

