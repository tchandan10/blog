import './App.css'

import React, {Component} from 'react'

import Header from './components/Header/Header';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navs : ["Home","Products","About","Login","Reg"]
    }
    // this.getUserData();
  }

  // clickHandle(){
  //   this.setState({name : "Rahul"})
  // }

  // getUserData(){
  //   let url = "http://localhost:4000/";
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.makeAllDisable(data);
  //     this.setState({users : data})
  //   });
  // }

  // makeAllDisable(data){
  //   data.forEach(elem => {
  //     elem['isDisable'] = true;
  //   });
  // }

  // editUserData(id, data){
  //   let url = "http://localhost:4000/update/"+id;
  //   let that = this;
  //   fetch(url,{
  //     method : 'PUT',

  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',             
  //     },

  //     body: JSON.stringify({name : data})

  //   }).then(response => response.json())
  //   .then(data => {
  //     that.makeAllDisable(that.state.users);
  //     that.setState({users : that.state.users})
  //   });
  // }

  // enableEditMode(index){
  //   this.makeAllDisable(this.state.users);
  //   this.state.users[index]['isDisable'] = false;
  //   this.setState({users : this.state.users})
  // }

  // deleteUserData(id, index){
  //   let url = "http://localhost:4000/delete/"+id;
  //   fetch(url,{method : 'DELETE'})
  //   .then(response => response.json())
  //   .then(data => {
  //     this.state.users.splice(index, 1);
  //     this.setState({users : this.state.users})
  //   });
  // }

  // changeText(index, event){
  //   this.state.users[index].name = event.target.value;
  //   this.setState({users : this.state.users});
  // }

  // addUserData(data){

  // }

  // addNewRow(){
  //   this.state.users.push({name:'', isDisable : false});
  //   this.setState({users : this.state.users})
  // }

  render() {
    return (
      <div id="container">
        <Header items={this.state.navs}></Header>
      </div>
      )
  }
}

export default App
