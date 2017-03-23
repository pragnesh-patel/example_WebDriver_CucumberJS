
require('geckodriver'); //for firefox
require('chromedriver');

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

var TestPageObject = require('../../pageObjects/testpageobject.js');

function CustomWorld() {
  
  this.driver = new seleniumWebdriver.Builder().forBrowser('firefox').build();
  
  this.testpageobject = new TestPageObject(this.driver);

};

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
