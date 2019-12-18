import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//////////Router Example////////
///////////////////////////////
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App1 from './routers/App1';
import Users from './routers/users';
import Contact from './routers/contact';
import NotFound from './routers/nofound';
///////////////////////////////////
//////////-Router Example-////////

import App from './App';
import Accordion from './Accordion';
import Jokes from './Jokes';
import * as serviceWorker from './serviceWorker';
import ToDoItem from './components/todoitem';

//////////Router Example////////
////////Router Example////////
const myRouting = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <>
        <Route exact path="/" component={App1} />
        <Route exact path="users/:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </>
    </div>
  </Router>
);
////////Router Example////////

// ReactDOM.render(<Accordion />, document.getElementById('root'));
ReactDOM.render(
  <>
    <App />
    <hr />
    <Accordion />
    <hr />
    <Jokes />
    <hr />
    {myRouting}
  </>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(myRouting, document.getElementById('root'));

serviceWorker.unregister();
