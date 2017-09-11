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
