import React from 'react';
import '../App.css';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input className="input__username" type="text" name="username" placeholder="username"/>
      <button className="button__submit">Submit</button>
    </form>
  );
}

export default UserForm;
