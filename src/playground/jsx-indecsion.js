console.log('App.js is running!');

const app = {
  title:'Indecision App',
  subTitle:'Put your life in the hands of a computer',
  options:[]
}

const onFormSubmit = (e)=>{
  e.preventDefault()

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''
    renderApp()
  }
}

const remove = () => {
  app.options = []
  renderApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  console.log(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {(app.subTitle) && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options": "No options" }</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
    <button onClick={remove}>remove all</button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}> Options: {option}</li>
        })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot)
}

renderApp()
