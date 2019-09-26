import * as types from '../actions/actionsTypes';
import countriesData from '../data/countries.json';
import { Country } from '../types/Country';
import { CountriesActions } from '../types/types';

interface InitState {
  countries: Country[];
  country: Country | null;
  filteredCountries: Country[];
}

const initialState: InitState = {
  countries: [],
  country: null,
  filteredCountries: []
};

export function countriesReducer(
  state = initialState,
  action: CountriesActions
) {
  switch (action.type) {
    case types.COUNTRIES_GET_ALL:
      return { ...state, countries: countriesData };

    case types.COUNTRIES_GET_ONE:
      const filteredCountry = state.countries.filter(
        country => country.id === action.payload.id
      )[0];

      return {
        ...state,
        country: filteredCountry
      };

    case types.COUNTRIES_SEARCH:
      const filteredCountries = state.countries.filter(country =>
        country.name.toLowerCase().includes(action.payload.text.toLowerCase())
      );

      return { ...state, filteredCountries };

    case types.COUNTRIES_DELETE_ONE:
      return {
        ...state,
        countries: state.countries.filter(
          country => country.id !== action.payload.id
        ),
        filteredCountries: state.filteredCountries.filter(
          country => country.id !== action.payload.id
        )
      };

    case types.COUNTRIES_SET_CONTINENT:
      return {
        ...state,
        filteredCountries: state.countries.filter(country =>
          country.continent
            .toLowerCase()
            .includes(action.payload.text.toLowerCase())
        )
      };

    default:
      return state;
  }
}
