import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import { CountriesList, SingleCountry, CountryLayer } from '../styled/flag-list';
import { Btn } from '../styled/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteCountryList = (props) => (
    <CountriesList>
        {props.countries.map(country=> {
            return (
                <SingleCountry key={country.numericCode}>
                    <CountryFlag country={country} />
                    <CountryLayer>
                        <Btn delete onClick={props.deleteFavorite.bind(null, country.numericCode)}>
                            <FontAwesomeIcon icon="trash-alt" />
                            Delete
                        </Btn>
                        <Link key={country.numericCode} to={'countries/country/' + country.numericCode}>
                            <FontAwesomeIcon icon="info" />
                            Information
                        </Link>
                    </CountryLayer>
                </SingleCountry>
            )
        })}
    </CountriesList>
);

export default FavoriteCountryList;