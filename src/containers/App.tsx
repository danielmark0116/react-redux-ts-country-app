import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { Country } from '../types/Country';
import { Dispatch } from 'redux';
import { CountriesActions } from '../types/types';
import { countriesGetOne } from '../actions/countriesActions';

interface IProps {}

interface IState {
  initState: string;
}

type Props = IProps & StateToProps & DispatchToProps;

class App extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initState: 'test'
    };
  }

  componentDidMount() {
    const { countries, countriesGetOne } = this.props;

    console.log(countries);

    countriesGetOne(1);
  }

  render() {
    return (
      <Fragment>
        <h1>app</h1>
      </Fragment>
    );
  }
}

interface StateToProps {
  countries: Country[];
  country: Country;
}

interface DispatchToProps {
  countriesGetOne: Function;
}

const mapStateToProps = (state: AppState, ownProps: IProps) => ({
  countries: state.countriesReducer.countries,
  country: state.countriesReducer.country
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
)(App);
