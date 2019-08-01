import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, Book, AccountBox } from '@material-ui/icons';

function NavBar(props) {
  return (
    <List component='nav'>
      <ListItem component='div' variant='title'>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            HOME <Home />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            London <Book />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            Contact <AccountBox />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            Singapore
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
