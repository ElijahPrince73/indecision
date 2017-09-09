console.log('App.js is running!');

const app = {
  title:'Indecision App',
  subTitle:'Put your life in the hands of a computer',
  options:['One','Two','Three']
}

// JSX - JavaScript XML
const template = (
<div>
  <h1>{app.title}</h1>
  {(app.subTitle) && <p>{app.subTitle}</p>}
  <p>{app.options.length > 0 ? "Here are your options": "No options" }</p>
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

const user = {
  name: 'Eliah',
  age:20,
  location:'Las Vegas'
}

function getLocation(location) {
 if (location) {
   return <p>location: {location}</p>
 }
}

const templateTwo = (
  <div>
    <h1>
      {user.name? user.name: 'Anonymouse'}
    </h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
