import React from 'react';
import { Country } from '../types/Country';

interface IProps {
  country: Country;
}

const CountryFlag = (props: IProps) => {
  return (
    <div>
      <div className="country-logo-wrapper">
        <img
          src={props.country.imageUrl}
          alt="country photo"
          className="country-logo"
        />
      </div>
    </div>
  );
};

export default CountryFlag;
