'use strict';

var visibility = false;

var toggle = function toggle() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Toggler'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'hide details' : 'show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey these are details'
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
