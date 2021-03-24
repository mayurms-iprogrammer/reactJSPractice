
import { render } from '@testing-library/react';
import React, { useState } from 'react';
import '../src/Component/Dashboard.css';
import Dashboard from './Component/Dashboard';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      person: [
        { name: "aniket", age: "23" },
        { name: "Tushar", age: "32" },
        { name: "Shubham", age: "36" }

      ]

    }
  }
  switchNameHandler = (name) => {

    let data = [
      { name: name, age: "23" },
      { name: "Tushar", age: "32" },
      { name: "Shubham", age: "36" }
    ]
    this.setState({ person: data });
  }


  changedHandler = (value) => {

    this.setState({
      person: [
        { name: "Ritesh", age: "23" },
        { name: "aniket", age: "32" },
        { name: value, age: "36" }
      ]

    });
  }
  togglePersonHandler = () => {
   this.setState({isVisible:!this.state.isVisible});
  }
  render() {
    return (
      <div className='app-container' >
        <h1>Hi,i'm React App</h1>
        <button
          onClick={this.togglePersonHandler}
        >Switch</button>
        {this.state.isVisible===false?null:  <div>
          <Dashboard
            name={this.state.person[0].name}
            age={this.state.person[0].age}

          />
          <Dashboard
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this)}
          />


          <Dashboard
            changedHandler={this.changedHandler.bind(this)}
            name={this.state.person[2].name}
            age={this.state.person[2].age}> my hobbies are : cricket

          </Dashboard>





        </div>

        }
        {this.state.person.map(person=>{
          return <h5>{person.name}</h5>
        })}
      </div>
    )
  }


}
export default App;
