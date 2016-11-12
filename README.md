# React-Redux Testing
A simple app built to better understand testing React components and Redux functions with Mocha, Chai, and Chai-jQuery.

#### Intentions
This app is more about testing not necessarily super-interesting React Components. A text box and comment list are just a few features to focus on testing. 

These specs just assert that the end-product, the HTML that gets rendered on the page, is going to be rendered correctly. These specs do not test any specific React methods. Specs are designed to ensure that the tests are flexible and to allow other developers to refactor this code as much as possible. Tests should only fail when features break. 

The Redux specs on the other hand do test specific methods, namely the reducers and actions. Redux specs ensure that the `type` and `payload` are correct, and that this payload is delivered to React components as props correctly. 

#### Usage
* Clone this repo
* run `npm install`
* run test suite with `npm test --watch`
* open app in the browser with `npm start`
   
       
    
        
