let visibility = false;

const toggle = () => {
  visibility = !visibility;
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>
        Toggler
      </h1>
      <button onClick={toggle}>
        {visibility ? 'hide details' : 'show details'}
      </button>
      {visibility &&(<div>
        <p>Hey these are details</p>
      </div>)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'))
}

render()
