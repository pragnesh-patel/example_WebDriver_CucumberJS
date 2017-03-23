#features/test.feature
Feature: Running Cucumber with webdriver JS
    As a user of cucumber 
    I should be able to navigate to a page 
    In order to run my E2E tests

@dev
    Scenario: Test Feature to run selenium webdriver
        Given I go to the page "http://demo.nopcommerce.com/"
        When I look at the page for components
        Then I should see the title
        