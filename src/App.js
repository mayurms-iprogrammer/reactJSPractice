
import React, { useState } from 'react';
import '../src/Component/Dashboard.css';
import Radium, { StyleRoot } from "radium";
import Dashboard from './Component/Dashboard';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      person: [
        { id: 1, name: "aniket", age: "23" },
        { id: 2, name: "Tushar", age: "32" },
        { id: 3, name: "Shubham", age: "36" }

      ]

    }
  }
  switchNameHandler = (name) => {

    let data = [
      { id: 1, name: name, age: "23" },
      { id: 2, name: "Tushar", age: "32" },
      { id: 3, name: "Shubham", age: "36" }
    ]
    this.setState({ person: data });
  }




  changedHandler = (value, id) => {
    let personIndex = this.state.person.findIndex(p => {

      return p.id == id;
    })
    // console.log(personIndex, "Person index" );

    let person = { ...this.state.person[personIndex] };
    person.name = value;
    console.log(person, "Array person==>");

    let persons = this.state.person;
    persons[personIndex] = person;




    this.setState({
      person: persons
    });
  }




  togglePersonHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  deletePersonHAndler = (itemIndex) => {
    let data = this.state.person;
    data.splice(itemIndex, 1);
    this.setState({ person: data });
  }

  render() {
    const style = {
      backgroundColor: this.state.isVisible == true ? "red" : 'green',
      color: 'white',
      curser: "pointer",
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let classss = [];
    console.log(...classss, "bhau");


    if (this.state.person.length <= 2) {
      classss.push('red')
    }

    if (this.state.person.length <= 1) {
      classss.push('green');
    }

    return (
      <StyleRoot>


     
          <div className='app-container' >
            <h1 className={classss}>Hi,i'm React App</h1>
            <button
              style={style}
              onClick={this.togglePersonHandler}
            >Toggle Button</button>


            {this.state.isVisible === false ? null :
              this.state.person.map((person, index) => {
                return <Dashboard
                 className="DashboardContainer"
                  name={person.name}
                  age={person.age}
                  key={index}
                  changedHandler={(value) => {
                    console.log(value, person.id, "info");
                    this.changedHandler(value, person.id)
                  }}
                  click={this.deletePersonHAndler.bind(this, index)}
                />
              })

            }

          </div>

   
      </StyleRoot>
    )

  }


}
export default Radium(App);
