import React, { Component, Fragment, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { Country } from '../types/Country';
import { CountriesActions } from '../types/types';

import {
  countriesGetOne,
  countriesGetAll,
  countriesSearch,
  countriesDeleteOne
} from '../actions/countriesActions';

import '../styles/country.css';

import CountryFlagList from '../presentational/flag-list.component';

interface IProps {}

interface IState {
  inputValue: string;
}

type Props = IProps & StateToProps & DispatchToProps;

class CountryFlagsContainer extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    const { countriesGetAll, countriesSearch } = this.props;

    countriesGetAll();
    countriesSearch('');
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { countriesSearch } = this.props;

    this.setState(
      {
        inputValue: e.target.value
      },
      () => {
        countriesSearch(this.state.inputValue);
      }
    );
  };

  handleDeleteCountry = (id: number) => {
    const { countriesDeleteOne } = this.props;

    countriesDeleteOne(id);
  };

  render() {
    const { countries, filteredCountries } = this.props;
    const { inputValue } = this.state;

    if (countries.length === 0) return null;

    return (
      <Fragment>
        <br />
        <div className="search text-center">
          <input
            type="text"
            value={inputValue}
            name="inputValue"
            onChange={this.handleInput}
          />
        </div>
        <CountryFlagList
          deleteCountry={this.handleDeleteCountry}
          countries={filteredCountries}
        />
      </Fragment>
    );
  }
}

interface StateToProps {
  countries: Country[];
  country: Country | null;
  filteredCountries: Country[];
}

interface DispatchToProps {
  countriesGetOne: Function;
  countriesGetAll: Function;
  countriesSearch: Function;
  countriesDeleteOne: Function;
}

const mapStateToProps = (state: AppState, ownProps: IProps) => ({
  countries: state.countriesReducer.countries,
  country: state.countriesReducer.country,
  filteredCountries: state.countriesReducer.filteredCountries
});

const mapDispatchToProps = (
  dispatch: Dispatch<CountriesActions>,
  ownProps: IProps
) => ({
  countriesGetAll: () => dispatch(countriesGetAll()),
  countriesGetOne: (id: number) => dispatch(countriesGetOne(id)),
  countriesSearch: (text: string) => dispatch(countriesSearch(text)),
  countriesDeleteOne: (id: number) => dispatch(countriesDeleteOne(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryFlagsContainer);
