import React from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm';

class App extends React.Component {

  state = {
    repos: null,
    avatar: null,
    name: null,
    location: null,
    bio: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get('https://api.github.com/users/'+user)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({
          repos: repos,
          avatar: res.data.avatar_url,
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio
        });
      });
    } else return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
          <UserForm getUser={this.getUser} />
          { this.state.avatar ? <img className="profile__image" src={ this.state.avatar } alt=""/> : <p></p> }
          { this.state.name ? <p><span className="title__subtitle">Name:</span> { this.state.name } </p> : <p></p> }
          { this.state.bio ? <p><span className="title__subtitle">Bio:</span> { this.state.bio } </p> : <p></p> }
          { this.state.location ? <p><span className="title__subtitle">Location:</span> { this.state.location } </p> : <p></p> }
          { this.state.repos ? <p><span className="title__subtitle">Number of repos:</span> { this.state.repos } </p> : <p>Please enter the username. </p> }
      </div>
    );
  }
}

export default App;
