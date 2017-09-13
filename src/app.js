class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hand of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return (
      <div>
        <button>What Should I Do</button>
      </div>)
  }
}

class Options extends React.Component{
  render() {
    return (
      <div>
        Option Component
      </div>
    )
  }
}

class AddOption extends React.Component{
  render() {
    return(
      <div>Add Option Component</div>
    )
  }
}



const jsx = (
  <div>
    <h1>
      Title
    </h1>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
