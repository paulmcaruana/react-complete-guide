import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state ={
        persons: [
          {id:'paul1', name:'Paul', age: 46},
          {id: 'jill1', name:'Jill', age: 37},
          {id: 'sam1', name:'Sam', age: 14}
        ],
        otherState: 'Some other value',
        showPersons: false
    }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle People</button>
        {persons}
      </div>

    )};
  }

export default App;