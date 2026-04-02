Feature: to test the login functionality

Scenario: To login with valid credentials
Given user is on login page
When enter valid userid and valid pwd and click login
Then user is on products page

Scenario Outline: To login with invalid credentials
Given user is on login page 
When enter invalid "<userid>" or invalid "<pwd>" and click login
Then error message should be displayed
Examples:
|userid|pwd|
|standard_user1|pwd1|
|standard_user2|pwd2|


