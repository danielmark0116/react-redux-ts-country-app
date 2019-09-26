import * as types from '../actions/actionsTypes';

interface CountriesGetAllActionType {
  type: typeof types.COUNTRIES_GET_ALL;
}

interface CountriesGetOneActionType {
  type: typeof types.COUNTRIES_GET_ONE;
  payload: {
    id: number;
  };
}

interface CountriesDeleteOneActionType {
  type: typeof types.COUNTRIES_DELETE_ONE;
  payload: {
    id: number;
  };
}

interface CountriesSearchActionType {
  type: typeof types.COUNTRIES_SEARCH;
  payload: {
    text: string;
  };
}

interface CountriesSetContinentActionType {
  type: typeof types.COUNTRIES_SET_CONTINENT;
  payload: {
    text: string;
  };
}

export type CountriesActions =
  | CountriesGetAllActionType
  | CountriesGetOneActionType
  | CountriesDeleteOneActionType
  | CountriesSearchActionType
  | CountriesSetContinentActionType;
