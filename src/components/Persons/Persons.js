import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js ] Inside Constructor', props)

  }

  componentWillMount() {
    console.log('[Persons.js ] componentwillmount()')
  }

  componentDidMount() {
    console.log('[Persons.js ] Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js ] Inside componentWillReceiveProps()', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js ] Inside shouldComponentUpdate()', nextProps, nextState)
    return nextProps.person !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js ] Inside componentWillUpdate()', nextProps, nextState)

  }
  render() {
    console.log('[Persons.js ] render()')
    return (this.props.persons.map((person, index) => {
      return (
        <div>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />

          <select onChange={(event)=>this.props.test(event,'test-key')}>
            <option value='1'> Option 1 </option>
            <option value='2'> Option 2 </option>
          </select>
        </div>
      )
    })
    );

  }
}

export default Persons;