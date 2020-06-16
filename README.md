# React-dashboard

A react dashboard using combination of Charts, Maps, and KPI elements.

React app created with [Create React App](https://github.com/facebookincubator/create-react-app)

## Create-react-app

	`$ npx create-react-app react-dashboard`
	
### Installing bootstrap

	`$ npm install --save bootstrap`
	
### Installing Fusion Charts

	`$ npm install --save fusioncharts`
	
### Installing Fusion Maps

	`$ npm install --save fusionmaps`
	
### Installing Fusion chart component for React

	`$ npm install --save react-fusioncharts`

## Setting up Google API

- Create a project on Google Cloud console from [here](https://console.developers.google.com/projectcreate)
- From console, go to "APIs & Services" and Enable Google Sheets API in the project.
- After it is processed, go to "Credentials" from the side bar.
- Click create credentials and select "API Key" and select "Restrict Key".
- Copy the API Key to the config file along with the ID of google sheets which can be found on the link of the sheet. (Make sure to make the sheet public)