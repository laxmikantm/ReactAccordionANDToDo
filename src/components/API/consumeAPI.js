import React, { Component } from 'react';

class CONSUMEAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      actor: {}
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    //Loading StarTrack Actor API
    fetch('https://swapi.co/api/people/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          actor: data
        });
      });
  }

  render() {
    const text = this.state.loading
      ? 'Loading Actor API Output.....'
      : this.state.actor.name;
    return (
      <>
        <h5>Simple demo of Public API Consumption</h5>
        {text}
      </>
    );
  }
}

export default CONSUMEAPI;
