console.log('App.js is running!');

var app = {
  title:'Indecision App',
  subTitle:'Put your life in the hands of a computer'
}

// JSX - JavaScript XML
var template = (
<div>
  <h1>{app.title}</h1>
  <p>{app.subTitle}</p>
  <ol>
    <li>
      item one
    </li>
    <li>
      item one
    </li>
  </ol>
</div>
);

var user = {
  name: 'Eliah',
  age:25,
  location:'Las Vegas'
}

var templateTwo = (
  <div>
    <h1>
      {user.name.toUpperCase()}
    </h1>
    <p>
      Age: {user.age}
    </p>
    <p>
      Location: {user.location}
    </p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
