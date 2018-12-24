Feed Reader Testing
===============================

# Table of Contents

* [Description](#description)
* [Run the Application](#run-the-application)
* [To Complete the Tests](#to-complete-the-tests)
* [Code Dependencies](#code-dependencies)



## Description

In this project you are given a web-based application that reads RSS feeds. You will use [Jasmine](http://jasmine.github.io/) to write a number of tests against a pre-existing application.

## Run the Application

In order to run the application you can:

* Download as .zip file
* Clone or fork this project:

    ```
    $ git clone https://github.com/moonfallmaple/feedreader-testing.git
    ```
After that, open the `index.html` and check the test results.



## To Complete the Tests

**Some preparation**

1. Familiarize yourself with the starter code
    * Open up `index.html` and review the functionality of the application within your browser
    * What is all the code in `app.js` doing? Be sure to read all code comments
    * Check out `style.css`. How is styling applied to the application?

2. Explore the Jasmine file in `feedreader.js`
    * This is the file in which you'll be writing your tests
    * Make sure to read all code comments here as well
    * Review the [Jasmine documentation](http://jasmine.github.io) if needed

3. Object how jasmine work through edit the `allFeeds` variable in `app.js` to make the provided test fail
    * Return the `allFeeds` variable to a passing state after reviewing the failed test

**Write Test**

1. Write a new test suite named "RSS Feeds" 

    * Write a test make sure that the allFeeds variable has been defined and that it is not empty.

    * Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty

    * Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
  
2. Write a new test suite named `"The menu"`

    * Write a test that ensures the menu element is hidden by default
   
    * Write a test that ensures the menu changes visibility when the menu icon is clicked. 

3. Write a test suite named `"Initial Entries"`
 
    * Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container

4. Write a test suite named `"New Feed Selection"`

    * Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
 

 * No test should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 * Error handling should be implemented for undefined variables and out-of-bound array access
 * When complete, all of your tests should pass


## Code Dependencies

* [Project Feed Reader Testing - Starter Code](https://github.com/udacity/frontend-nanodegree-feedreader)
* [jQuery](https://jquery.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Handlebars](https://handlebarsjs.com/)
* [Google's JavaScript Loader API](https://www.google.com/jsapi)
* [Jasmine](https://jasmine.github.io/)
* Icon: [Icomoon](https://icomoon.io/)
* Fonts: [Google Fonts](https://fonts.google.com/)
