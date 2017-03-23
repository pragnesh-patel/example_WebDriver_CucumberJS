'use strict';
 
 //install
 // npm --save-dev selenium-webdriver
 // npm --save-dev geckodriver
 // npm --save-dev chromedriver

 // run test using node test.js
 // src :  http://www.codechewing.com/library/beginners-guide-to-selenium-webdriverjs/


var WebDriver = require('selenium-webdriver');
require('geckodriver'); //for firefox
require('chromedriver');

// var driver = new WebDriver.Builder().withCapabilities(
//     WebDriver.Capabilities.chrome()
// ).build();

var driver = new WebDriver.Builder().forBrowser('chrome').build();
 
driver.get('https://www.google.co.uk');
 
driver.findElement(WebDriver.By.name('q')).then(function(input) {
  input.sendKeys('codechewing');
  input.sendKeys(WebDriver.Key.ENTER);
});
 
driver.sleep(1000);
 
// var elem = driver.findElement({id: 'ires'});
// var link = elem.findElement({css: 'ol li h3 a'});
 
// link.getText().then(function(text) {
//   var pageTitle = 'Code Chewing –HTML, PHP, CSS, Javascript tips';
//   console.log('codechewing.com is the top result?');
//   console.log(text.indexOf(pageTitle) !== -1);
// });

driver.quit();