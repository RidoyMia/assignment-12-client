import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Row>
                <Col md="4">
                    <h2>01: How will you improve the performance of a React Application?</h2>
                    <p>Lazy loading has become one of the ways to optimize React applications to speed up the load time. react-lazyload (npm i react-lazyload) react-lazy-load-image-component(npm i --save react-lazy-load-image-component) react-lazy-load(npm install --save react-lazy-load) uselazy(npm install uselazy) Optimizing responsive applications by lazy loading elements and images for efficiency is very important in today's development. These libraries make it easier than ever to speed up the performance of your feedback app and improve the overall user experience. Libraries such as Gatsby-Image and React-Lazyload are more suitable for lazy loading image gallery applications, and more suitable for other libraries such as eugenics elements, and for response projects.</p>
                </Col>
                <Col md="4">
                    <h2>02: What are the different ways to manage a state in a React application?</h2>
                    <p>Manage my React app : Local state Global states Local (UI) State - Local state is the data that we manage on one or the other component. Local states are often manipulated in response using the useState hook. For example, to show or hide a model element, or to track form values ​​such as form submission, will require a local state when the form is inactive and the value of a form's inputs. Global (UI) State - The global state is the data that we manage across multiple elements. A global state is required when we want to receive and update data anywhere in our app, or at least in multiple elements</p>
                </Col>
                <Col md="4">
                    <h2>03: How does prototypical inheritance work?</h2>
                    <p>Prototype Inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set up using __proto__.</p>
                </Col>
                <Col md="4">
                    <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>if we update the hook value like this: product = [...]; then it will show us an error because we declare/ destructuring the hook as constant (const); but if we use it as let then it will run or set its value. there is an issue. if we don't use setProducts to update the state then the component will not re-render. setProducts is done the asynchronous task. then it will merge the new value and replace the old value then re-render that component</p>
                </Col>
                <Col md="4">
                    <h2>05: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one.</p>
                </Col>
                <Col md="4"> <h2>06: What is a unit test? Why should write unit tests? </h2>
                    <p>Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;