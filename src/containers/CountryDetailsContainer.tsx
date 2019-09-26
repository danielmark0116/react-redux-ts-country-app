import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/index';
import { Country } from '../types/Country';
import { Dispatch } from 'redux';
import { CountriesActions } from '../types/types';

import { countriesGetOne } from '../actions/countriesActions';

import CountryDetails from '../presentational/country-details.component';

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
}

interface IState {}

type Props = IProps & mapStateProps & mapDispatchProps;

class CountryDetailsContainer extends Component<Props, IState> {
  componentDidMount() {
    const { paramsId, countriesGetOne } = this.props;

    countriesGetOne(paramsId);
  }

  render() {
    const { country } = this.props;

    if (country === null) return null;

    return <CountryDetails country={country} />;
  }
}

interface mapStateProps {
  country: Country | null;
  paramsId: number;
}

interface mapDispatchProps {
  countriesGetOne: Function;
}

const mapStateToProps = (state: AppState, ownProps: IProps) => ({
  country: state.countriesReducer.country,
  paramsId: parseInt(ownProps.match.params.id)
});

const mapDispatchToProps = (
  dispatch: Dispatch<CountriesActions>,
  ownProps: IProps
) => ({
  countriesGetOne: (id: number) => dispatch(countriesGetOne(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryDetailsContainer);
