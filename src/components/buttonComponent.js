import React, { Component } from 'react';

function buttonComponent(props) {
  const withUsefulButton = Button => props => <Button {...this.props} color='red' />;
  return withUsefulButton;
}

export default buttonComponent;
