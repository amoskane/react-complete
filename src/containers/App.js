import React from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import styled from 'styled-components';
import withComponentClass from '../hoc/withComponentClass'
// import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state... but below is more modern syntax
    console.log('[app.js] constructor')
  }

  state = {
    persons: [
      { id: 'dsdv', name: 'Amos', age: 2 },
      { id: 'bfdbff', name: 'Bamio', age: 22 },
      { id: 'xcxbx', name: 'Camosio', age: 222 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] this.getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  deletePersonHandler = personIndex => {
    const personsClone = this.state.persons.slice()
    personsClone.splice(personIndex, 1)
    this.setState({
      persons: personsClone
    })
  }

  togglePersonsHandler = () => {
    const current = this.state.showPersons
    this.setState({
      showPersons: !current
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    //not cloned
    //const person = this.state.persons[personIndex]

    //cloned
    const person = {
      ...this.state.persons[personIndex]
    }

    //or
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value
    const personsClone = [...this.state.persons]
    personsClone[personIndex] = person

    // this.setState({
    //   persons: personsClone,
    //   //DO NOT DO. Past state is not guaranteed.
    //   changeCounter: this.state.changeCounter + 1
    // })

    this.setState((prevState, props) => {
      return {
        persons: personsClone,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  removeClickHandler = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    console.log('[App.js] render')
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          onClickHandler={this.deletePersonHandler}
          onChangeHandler={this.nameChangeHandler}
        />
      )
    }

    return (
      <>
        <button onClick={this.removeClickHandler}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            loginMethod: this.loginHandler
          }}
        >
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.title}
              personsLength={this.state.persons.length}
              showPersonsHandler={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
              //login={this.loginHandler}
            />
          )}
          {persons}
        </AuthContext.Provider>
      </>
    )
  }
}

export default withComponentClass(App, 'App')
