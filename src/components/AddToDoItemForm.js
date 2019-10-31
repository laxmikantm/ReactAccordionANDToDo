import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { from } from 'apollo-link';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  input: {
    display: 'none'
  }
}));

class AddToDoItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log(props);
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box
          component="span"
          display="flex"
          alignSelf="flex-end"
          width="100%"
          border="solid"
          justifyContent="center"
        >
          <form
            className="form-inline"
            onSubmit={event => {
              event.preventDefault();
              this.props.onSubmit(this.state.value);
            }}
          >
            <div className="form-group">
              <TextField
                label="TO DO Item"
                margin="normal"
                className={useStyles.TextField}
                value={this.state.value}
                floatingLabelText="Enter TO DO Item Here"
                onChange={e => {
                  this.setState({
                    value: e.target.value
                  });
                }}
              />
            </div>

            {/* <Button variant="contained" color="primary" className={useStyles.button} onClick={this.props.handler.bind(this)}> */}
            <Button
              onClick={e => {
                e.preventDefault();
                this.setState({
                  value: e.targe.value
                });
              }}
              variant="contained"
              color="primary"
              className={useStyles.button}
            >
              Click to Add Item
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

export default AddToDoItemForm;
