import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import {CountriesList, SingleCountry, CountryLayer } from '../styled/flag-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CountryFlagList = (props) => (
    <CountriesList>
        {props.countries.map(country=> {
            return (
                <SingleCountry key={country.numericCode}>
                    <CountryFlag country={country} />
                    <CountryLayer>
                        <Link className='logo' key={country.numericCode} to={'countries/country/' + country.numericCode}>
                            more info
                            
                        </Link>
                        <button className="delete-btn" onClick={props.deleteCountry.bind(null, country.numericCode)}>
                        <FontAwesomeIcon icon="trash-alt" />
                        Delete
                        </button>

                    </CountryLayer>
                </SingleCountry>
            )
        })}
    </CountriesList>
);

export default CountryFlagList;