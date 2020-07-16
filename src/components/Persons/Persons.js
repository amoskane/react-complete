import React from 'react'
import Person from './Person/Person'
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

//class Persons extends React.Component {
class Persons extends React.PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('persons getDerivedStateFromProps');
  //   return state;
  // }

  // if you want to check if ALL props have changed,
  // use PureComponent instead

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'snapshot' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWill Unmount ')
  }

  render() {
    console.log('[Persons.js] rendering')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicker={() => {
            this.props.onClickHandler(index)
          }}
          changed={event => {
            this.props.onChangeHandler(event, person.id)
          }}
        >
          I am a prop and a children
        </Person>
      )
    })
  }
}

export default Persons
