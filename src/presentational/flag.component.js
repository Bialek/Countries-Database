import React from 'react';
import { CountryLogo } from '../styled/flag';
import { HeadingSecendery } from '../styled/Heading'

const CountryFlag = (props) => (
    <div>
        <CountryLogo src={props.country.flag} alt="country flag" />
        <HeadingSecendery>{props.country.name}</HeadingSecendery>
    </div>
);

export default CountryFlag;