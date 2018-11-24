import React from 'react';
import { CountryLogo } from '../styled/flag';

const CountryFlag = (props) => (
    <div>
        <CountryLogo src={props.country.flag} alt="country flag" />
        <h2>{props.country.name}</h2>
    </div>
);

export default CountryFlag;