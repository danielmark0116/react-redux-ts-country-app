import React, { Fragment } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagsContainer from './containers/CountryFlagsContainer';
import CountryDetailsContainer from './containers/CountryDetailsContainer';
import ContinentsContainer from './containers/ContinentsContainer';
import Navigation from './presentational/navigation.component';

export default (
  <Fragment>
    <Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/countries/country/:id"
          component={CountryDetailsContainer}
        />
        <Route path="/countries" component={CountryFlagsContainer} />
        <Route path="/continents" component={ContinentsContainer} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navigation>
  </Fragment>
);
