import React from 'react';
import { Country } from '../types/Country';
import CountryFlag from './flag.component';

import { Link } from 'react-router-dom';

interface IProps {
  countries: Country[];
  deleteCountry?: Function;
}

const CountryFlagList = (props: IProps) => {
  return (
    <div className="countries-list">
      {props.countries.map(country => (
        <div className="single-country" key={country.id}>
          <Link className="logo" to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
          {props.deleteCountry && (
            <button
              onClick={() => {
                props.deleteCountry && props.deleteCountry(country.id);
              }}
            >
              DELETE
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountryFlagList;
