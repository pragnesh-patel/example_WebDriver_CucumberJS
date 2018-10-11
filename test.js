'use strict';
 
 //install
 // npm --save-dev selenium-webdriver
 // npm --save-dev geckodriver
 // npm --save-dev chromedriver

var WebDriver = require('selenium-webdriver');
require('geckodriver'); //for firefox
require('chromedriver');

var driver = new WebDriver.Builder().forBrowser('chrome').build();
 
driver.get('https://www.google.co.uk');
 
driver.findElement(WebDriver.By.name('q')).then(function(input) {
  input.sendKeys('codechewing');
  input.sendKeys(WebDriver.Key.ENTER);
});
 
driver.sleep(1000);
driver.quit();
