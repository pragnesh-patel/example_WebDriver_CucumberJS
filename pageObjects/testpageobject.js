

var TestPageObject = function(driver) {
  
  //if not using Jasmine then use Chai as the assertion and expectation tool:
  //var chai = require('chai');
  //var chaiAsPromised = require('chai-as-promised');
  //chai.use(chaiAsPromised);
  //var expect = chai.expect;

  var WebDriver = require('selenium-webdriver');
  var self = this;
  var driver = driver;

  this.get = function(webaddress) {

    //console.log('calling get function!')
    driver.manage().timeouts().implicitlyWait(30 * 1000);
    driver.manage().timeouts().pageLoadTimeout(5000);
    return driver.get(webaddress);
    
  };

  this.getBlockTitle = function(){
    //return self.get(browser.params.devsite);
    var text = driver.findElement(WebDriver.By.css('div.topic-block-title > h2')).getText();
    return text.then(function(txt) {
      //console.log(txt);
      return txt;
    });
  }



}; //end of Angular Login
module.exports = TestPageObject;