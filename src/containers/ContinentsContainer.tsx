import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Country } from '../types/Country';
import { AppState } from '../store';
import { CountriesActions } from '../types/types';

import {
  countriesGetAll,
  countriesSetContinent
} from '../actions/countriesActions';

import CountryFlagList from '../presentational/flag-list.component';

interface IProps {}

interface IState {
  selectFieldValue: string;
}

type Props = IProps & StateToProps & DispatchToProps;

class ContinentsContainer extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectFieldValue: ''
    };
  }

  componentDidMount() {
    const { countriesGetAll, countriesSetContinent } = this.props;
    const { selectFieldValue } = this.state;

    countriesGetAll();
    countriesSetContinent(selectFieldValue);
  }

  handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { countriesSetContinent } = this.props;
    const { selectFieldValue } = this.state;

    this.setState(
      {
        selectFieldValue: e.target.value
      },
      () => countriesSetContinent(this.state.selectFieldValue)
    );
  };

  render() {
    const { filteredCountries } = this.props;

    return (
      <div>
        <select onChange={e => this.handleSelect(e)}>
          <option value="">-</option>
          <option value="Europa">Europe</option>
          <option value="Afryka">Africa</option>
        </select>
        <CountryFlagList countries={filteredCountries} />
      </div>
    );
  }
}

interface StateToProps {
  countries: Country[];
  filteredCountries: Country[];
}

interface DispatchToProps {
  countriesGetAll: Function;
  countriesSetContinent: Function;
}

const mapStateToProps = (state: AppState) => ({
  countries: state.countriesReducer.countries,
  filteredCountries: state.countriesReducer.filteredCountries
});

const mapDispatchToProps = (dispatch: Dispatch<CountriesActions>) => ({
  countriesGetAll: () => dispatch(countriesGetAll()),
  countriesSetContinent: (text: string) => dispatch(countriesSetContinent(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinentsContainer);
