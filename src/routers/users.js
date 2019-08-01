import React from 'react';

class Users extends React.Component {
  render() {
     console.log("props=");
              const {params} =this.props.match;
    return (
      <>
        <h1>Users</h1>
        <p>{params.id}</p>
      </>   
    );
 
  }
}

export default Users;