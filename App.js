import React, { Component } from 'react';
import './App.css';
import First from './component/First/First'

class App extends Component {
  state = {
    persons : [
      {name: "Monaor Hossain Munna", email: "monoarhossain142@gmail.com", address: "Mirpur2, Dhaka"},
      {name: "Monaor Hossain Mun", email: "monoarhossain143@gmail.com", address: "Mirpur10, Dhaka"},
      {name: "Monaor Hossain", email: "monoarhossain144@gmail.com", address: "Mirpur12, Dhaka"}
    ]
  }
  render() {
    return (
       <div className="App">
         {this.state.persons.map((people, index) => {
           return <First 
           key= { index }
           name={ people.name } 
           email={ people.email } 
           address={ people.address } />
         })}
         
       </div>
    );
  }
}

export default App;
