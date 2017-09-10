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

let count = 0;

const addOne = ()=>{
  count++;
  renderCoutnerApp()
}
const minusOne = () =>{
  count--
  renderCoutnerApp()
}
const reset = () => {
  count = 0;
  renderCoutnerApp()
}

const appRoot = document.getElementById('app');

const renderCoutnerApp = () =>{
  const templateTwo =(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
}

renderCoutnerApp();
