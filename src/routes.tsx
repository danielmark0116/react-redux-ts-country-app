import React, { Fragment } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import App from './containers/App';
import Navigation from './presentational/navigation.component';

export default (
  <Fragment>
    <Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries" component={App} />
        <Route path="/continents" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navigation>
  </Fragment>
);
