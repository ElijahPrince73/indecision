class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      title : "Indecision",
      subTitle: 'Put your life in the hand of a computer',
      options:['Thing One', 'Thing two', 'Thing three']
    }
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      }
    })
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    console.log(option);
  }

  render() {
    return (
      <div>
        {/* The header Component is setting properties for the Header Component on line 17*/}
        <Header title={this.state.title} subtitle={this.state.subTitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          optionsList={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        {/*This Component get these properties from the values passed in by IndecisionApp Component*/}
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
          What Should I Do
        </button>
      </div>)
  }
}

class Options extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.optionsList.map((option) => {
          return <Option key={option} OptionText={option}/>
        })}
      <Option/>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option: {this.props.OptionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component{
  addOption(e){
      e.preventDefault()
      const option = e.target.elements.option.value.trim()
      if (option) {
        console.log('added');
      }
  }
  render() {
    return(
      <div>
        Add Option Component
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
