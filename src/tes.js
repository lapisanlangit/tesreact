import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
import Project from './Project/Project';

class App extends Component {

  constructor(){
    super();
    // this.state={
    //   projects:[
    //     {
    //       title:"Bussines Website",
    //       category:"Website",
          
    //     },
    //     {
    //       title:"Bussines Cars",
    //       category:"Cars",
    //     },
    //     {
    //       title:"Bussinew Motors",
    //       category:"Motors",
          
    //     },
    //   ]
    // }
  }

  state={
    persons:[
      { id:1,name:'lala', age:20 },
      { id:2,name:'nana', age:25 },
      { id:3,name:'sasa', age:30 }
      
    ]
  }

  switchNameHandler=(newName) =>{
    this.setState({
      persons:[
        { name:newName, age:20 },
        { name:'nana', age:25 },
        { name:'kaka', age:30 }
      ]
    })
  }

  nameChangeHandler=(event,idx)=>{
    //  console.log(idx);
    const personId=this.state.persons.findIndex(p=>{
        return p.id===idx;
    })

    // console.log(personId);

    const person={...this.state.persons[personId]};
    // console.log(person);
    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personId]=person;
    this.setState({persons:persons})

  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }


  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }


 

  render() {
    const style={
      backgroundColor:'green',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }

    }

    let persons=null;
    if (this.state.showPersons) {
      persons=(
        <div>
          {this.state.persons.map((orang,index)=>{
            return  <Person key={orang.id} click={this.deletePersonHandler.bind(this,index)} changed={(event)=>this.nameChangeHandler(event,orang.id)} name={orang.name} age={orang.age}/>     
          })}
         
        </div>
      );

      style.backgroundColor="red"
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      };
    }

    const classes=[];
    if(this.state.persons.length <=2){
      classes.push('red')
    }

  if(this.state.persons.length <=1){
      classes.push('bold')
    }
    
    return (
      
      <div className="App">
          <h1 className={classes.join(' ')}>Hai aku react</h1>
          <button style={style} onClick={this.togglePersonHandler.bind(this)}>Ganti</button>
          {/* <Project proyeknya={this.state.projects} /> */}
          {persons}
      </div>
    );
  }
}

export default App;

