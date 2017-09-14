class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = 'Put your life in the hand of a computer';
    const options = ['Thing One', 'Thing two', 'Thing three'];

    return (
      <div>
        {/* The header Component is setting properties for the Header Component on line 17*/}
        <Header title={title} subtitle={subTitle}/>
        <Action/>
        <Options optionsList={options}/>
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
  handlePick(){
    console.log('it works');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do</button>
      </div>)
  }
}

class Options extends React.Component{
  constructor(props){
    super(props)
    this.removeAll = this.removeAll.bind(this)
  }
  removeAll(){
      console.log('remove');
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
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
