
//Cucumber step definition changes from cucumber version 1 to 2
// v1.3.1
// module.exports = function () {
//   this.Given(/^a step$/, function() {});
//   this.World = CustomWorld
// });

// v2.0.0 - New
// var {defineSupportCode} = require('cucumber');

// defineSupportCode(function({Given, setWorldConstructor}) {
//   Given(/^a step$/, function() {});
//   setWorldConstructor(CustomWorld);
// });

//npm install --save-dev selenium-webdriver
//npm install --save-dev chromedriver
//npm install --save-dev geckodriver
//npm install --save-dev cucumber << this will install v2.0+
//npm install chai chai-as-promised

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


var WebDriver = require('selenium-webdriver')
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
 

	Given('I go to the page {page:stringInDoubleQuotes}', function (page) {

		 //return this.driver.get(page);
		 return this.testpageobject.get(page);
	});

	When('I look at the page for components', function () {
		 
		 return this.testpageobject.getBlockTitle();
		 //callback(null, 'done');
	});

	Then('I should see the title', function () {
		 
		 return expect(this.testpageobject.getBlockTitle()).to.eventually.equal('Welcome to our store')
		  //.and.notify(callback);

	});

});
