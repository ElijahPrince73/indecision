'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item one'
    )
  )
);

var count = 0;

var addOne = function addOne() {
  count++;
  renderCoutnerApp();
};
var minusOne = function minusOne() {
  count--;
  renderCoutnerApp();
};
var reset = function reset() {
  count = 0;
  renderCoutnerApp();
};

var appRoot = document.getElementById('app');

var renderCoutnerApp = function renderCoutnerApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCoutnerApp();
