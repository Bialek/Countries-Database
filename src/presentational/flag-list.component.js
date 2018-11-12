import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import {CountriesList, } from '../styled/countries-list';

const CountryFlagList = (props) => (
    <CountriesList>
        {props.countries.map(country=> {
            return (
                <div className="single-country" key={country.numericCode}>
                    <Link className='logo' key={country.numericCode} to={'countries/country/' + country.numericCode}>
                        <CountryFlag country={country} />
                    </Link>
                    <button className="delete-btn" onClick={props.deleteCountry.bind(null, country.numericCode)}>X</button>
                </div>
            )
        })}
    </CountriesList>
);

export default CountryFlagList;