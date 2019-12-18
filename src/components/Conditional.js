import React from 'react';

function Conditional(props) {
  return props.isLoading && <h3>Component Loading........</h3>;
}

export default Conditional;
