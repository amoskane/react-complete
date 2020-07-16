import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Amos', age: 2 },
      { name: 'Amio', age: 22 },
      { name: 'Amosio', age: 222 },
    ],
  };
  switchNameHandler = () => {
    console.log('clicked');
    // NOPE this.setState(() => { this.state.persons[0].name: "no"})
    this.setState({
      persons: [
        { name: 'Amos', age: 4 },
        { name: 'Amio', age: 44 },
        { name: 'Amosio', age: 444 },
      ],
    });
  };
  nameChangeHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Amos', age: 3 },
        { name: e.target.value, age: 33 },
        { name: 'Amosio', age: 333 },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clicker={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        >
          <div>
            <p>this stuff in here</p>
          </div>
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     //takes 3 things
//     //element, configuration, children
//     // return React.createElement('div', null, 'h1', 'hi it is me!!');
//     return React.createElement(
//       'div',
//       { className: 'App' },
//       React.createElement('h1', null, 'hi it is me me me!!')
//     );
//   }
// }

// onClick={this.switchNameHandler.bind, 'newName'}
// if newName is static and switchNameHandler takes newName

//OR
// onClick={(e) => this.switchNameHandler()}
//although maybe inefficient
export default App;
