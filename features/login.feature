@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Ferawati is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Ferawati login with "standard_user" credential
    Then Ferawati should see home page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When Ferawati login with "locked_out_user" credential
    Then Ferawati should see error "Epic sadface: Sorry, this user has been locked out."
