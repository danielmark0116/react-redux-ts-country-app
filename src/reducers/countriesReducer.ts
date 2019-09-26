import * as types from '../actions/actionsTypes';
import countriesData from '../data/countries.json';
import { Country } from '../types/Country';
import { CountriesActions } from '../types/types';

interface InitState {
  countries: Country[];
  country: Country;
  filteredCountries: Country[];
}

const initialState: InitState = {
  countries: countriesData,
  country: countriesData[0],
  filteredCountries: countriesData
};

export function countriesReducer(
  state = initialState,
  action: CountriesActions
) {
  switch (action.type) {
    case types.COUNTRIES_GET_ALL:
      return state;
    case types.COUNTRIES_GET_ONE:
      return {
        ...state,
        country: state.countries.filter(x => x.id === action.payload.id)[0]
      };
    default:
      return state;
  }
}
