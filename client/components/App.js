import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Greedings from './Greedings';
import SignupPage from './signup/SignupPage';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <NavigationBar />
          <FlashMessagesList />
          <div>
            <Switch>
              <Route exact path='/' component={Greedings} />
              <Route path='/signup' component={SignupPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
