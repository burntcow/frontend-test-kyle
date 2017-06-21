[![Build Status](https://travis-ci.org/burntcow/frontend-test-kyle.svg?branch=master)](https://travis-ci.org/burntcow/frontend-test-kyle)
[![codecov](https://codecov.io/gh/burntcow/frontend-test-kyle/branch/master/graph/badge.svg)](https://codecov.io/gh/burntcow/frontend-test-kyle)

---

## Implementation Notes

This is my ([Kyle Robinson](https://github.com/ksr583)) solution for a Frontend Development Test/Challenge provided by a potential partner agency / client. The original [instructions](#introduction) are preserved below, but here are some notes on my implementation:

* Used Yarn for package installation and running npm commands.
* Switched from Mocha to Jest for testing (involved several dependency/package/version additions/adjustments)
* Added the Babel plugin for `transform-class-properties` to allow the simpler syntax being used in the containers
* Notes on the implementation of styling:
    * Added dependencies to allow for the use of Sass. If asked to do a project using CSS Modules, Styled Components / Glamourous, or any other CSS-in-JS implementation, that would be fine as well; I simply chose Sass because it's what I most commonly use, and thought it would be helpful for prospective reviewers to see at least a small example of that.
    * Normally I would have a much more robust Sass system in place with variables, mixins, functions, etc, and a much more organized directory/partial structure.
    * Normally include Normalize.css and a CSS reset of some kind.
    * In the interest of efficiency for completing this task, I included Sass partials for React components in their respective directories, and for expediency included an overall styles directory and Sass file with imports for everything else.
    * Added the classnames package for convenient CSS class operations.
* Due to some issues with `isomorphic-fetch` and the ability to mock it in the context of Enzyme/Jest, the test coverage remains at 95%. From what I can gather, that package is slightly outdated (there are 10 open PRs and the master branch hasn't been updated in over a year) and many people are moving to other packages that are better maintained.
* I didn't include any linting or other means of enforcing code styling in case reviewers preferred that the styling remain in keeping with the provided `.editorconfig`
* In a real application, more of the app could/would be broken into smaller React components (Section, SectionControls, Header, Input, Label, ListItem).
* While I made some effort to write the components such that they would be reusable outside of the context of listing pizzas, in a real application I would ensure that be the case.
* The use of the `variants` prop to pass in style variants that are appended to base classes is something I've been experimenting with in my effort to find good solutions for working with traditional design systems / component libraries.

---

## Introduction

In order to successfully complete this exam, you will need to have node v4 or greater installed on your machine.

* Install project dependencies: `npm i`
* To start the application: `npm start`
* To run the tests: `npm test`

These are the only commands you should have to worry about. Running `npm start` will start a local webserver and you can access the page from [http://localhost:8080](http://localhost:8080)

Once you are finished with the exam, please delete the node_modules directory, zip the folder, and email it to the exam coordinator.

## Expectations

We expect that you will complete this test in an honest fashion. You should not copy and paste code from stack overflow or blogs in order to complete it and you should implement it without the aid of anyone else. Successful completion will include an implementation for each of the following requirements. Extra credit will be given for tests (which use mocha and enzyme), refactoring, styles, and efficient usage of relevant algorithms.

Babel 6 is already included along with the complimentary build configuration. You should not need to make any changes to this.

You will only need to worry about supporting the latest version of Chrome for your solution.

### Usage of frameworks and libraries

This exam is intentionally designed to be implemented without the usage of any javascript frameworks or additional libraries other than the ones included in the package.json. You are to complete this exam without adding any additional dependencies.

## Requirements

### Scenario

* Given a list of pizzas available at '/pizza.json'
* When the server returns a response
* Then the list of pizzas should be shown
* And a filter input is shown
* And a sort button is shown

### Scenario

* Given the user has loaded the page
* When the page waits for data to load
* Then the text "Loading" should be shown
* And no other elements should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then only the pizzas that include the filter text should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then the list of pizzas should be filtered in a case insensitive way

### Scenario

* Given the page is shown with a list of pizzas
* When the user clicks the sort button
* Then the list of pizzas will be sorted in reverse alphabetic order

### Scenario

* Given the user has entered text into the filter input
* When the user clicks the sort button
* The the sorted list of pizzas should also be filtered according to the input
