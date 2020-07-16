import React from 'react'
import './person.css'
// import styled from 'styled-components'
// import Aux from '../../../hoc/Aux'
import WithClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
//import { render } from '@testing-library/react'
import AuthContext from '../../../context/auth-context'

class Person extends React.Component {
  //class based only, 16.6 and up
  //can be accessed from outside without an instantiation
  //if you need to access the context outside of the jsx
  static contextType = AuthContext

  componentDidMount() {
    this.inputElement.focus()
    console.log(this.context.loginMethod)
  }

  // const rnd = Math.random();
  // if (rnd < 0.5) {
  //   throw new Error('Something went wrong');
  // }

  // const StyledDiv = styled.div`
  //   width: 60%;
  //   margin: 16px auto;
  //   border: 1px solid #eee;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;

  //   @media (min-width: 500px) {
  //     width: 450px;
  //   }
  // `;
  render() {
    console.log('[Person.js] rendering')
    //const rnd = Math.random()

    // if(rnd > 0.7){
    //   throw new Error ('bad bad bad')
    // }

    return (
      <WithClass classes='person'>
        {/* <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please Log In</p>
          }
        </AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Log In</p>
        )}
        <p onClick={this.props.clicker}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          ref={inputEl => {
            this.inputElement = inputEl
          }}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    )

    //Would actually work.
    //an array of elements passed to createReactElement
    // return [
    //     <p key="i1" onClick={this.props.clicker}>
    //       I'm a {this.props.name} and I am {this.props.age} years old!
    //     </p>,
    //     <p key="i2">{this.props.children}</p>,
    //     <input
    //       key="i3"
    //       type='text'
    //       onChange={this.props.changed}
    //       value={this.props.name}
    //     />
    // ];
  }
}

Person.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person

//selects the first input b/c querySelector picks 1st
// componentDidMount runs after every render cycle
// componentDidMount(){
//   document.querySelector('input').focus()
// }

// class components only, will select the last input rendered
// componentDidMount(){
//   this.inputElement.focus()
// }

// render(){
//   return (
//     <input
//       type='text'
//       ref={(inputEl) => {this.inputElement = inputEl}}
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//   )
// }

//class component only also:
// constructor(props){
//   super(props)
//   this.inputElementRef = React.createRef()
// }

// componentDidMount(){
//   this.inputElementRef.current.focus()
// }

//       ref={this.inputElementRef}
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
