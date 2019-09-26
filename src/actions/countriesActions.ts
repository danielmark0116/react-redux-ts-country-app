import * as types from './actionsTypes';
import { CountriesActions } from '../types/types';

export function countriesGetAll(): CountriesActions {
  return {
    type: types.COUNTRIES_GET_ALL
  };
}

export function countriesDeleteOne(id: number): CountriesActions {
  return {
    type: types.COUNTRIES_DELETE_ONE,
    payload: {
      id
    }
  };
}

export function countriesGetOne(id: number): CountriesActions {
  return {
    type: types.COUNTRIES_GET_ONE,
    payload: {
      id
    }
  };
}

export function countriesSearch(text: string): CountriesActions {
  return {
    type: types.COUNTRIES_SEARCH,
    payload: {
      text
    }
  };
}

export function countriesSetContinent(text: string): CountriesActions {
  return {
    type: types.COUNTRIES_SET_CONTINENT,
    payload: {
      text
    }
  };
}
