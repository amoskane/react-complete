import React from 'react'
import './person.css'
// import styled from 'styled-components'
// import Aux from '../../../hoc/Aux'
import WithClass from '../../../hoc/WithClass'

class Person extends React.Component {
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
        <p onClick={this.props.clicker}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
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

export default Person

//
