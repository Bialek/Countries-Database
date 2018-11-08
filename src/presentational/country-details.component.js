import React from 'react';
import { Wrapper, Header, CountryFlag, CountryInfo, CountryDetail } from '../styled/country-details'
import { Heading } from '../styled/Heading';

const CountryDetails = (props) => (
    <Wrapper>
        <Header>
            <CountryFlag src={props.country.flag} alt="country flag" />
        </Header>
        <CountryInfo>
            <Heading primary>{props.country.name}</Heading>
            <Heading>Continent: {props.country.region}</Heading>
            <CountryDetail>
                <span>Population</span>
                <span>{!isNaN(props.country.population) ? (props.country.population / 1000).toFixed(1) + ' k': props.country.population}</span>
            </CountryDetail>
            <CountryDetail>
                <span>Capital</span>
                <span>{props.country.capital}</span>
            </CountryDetail>
            <CountryDetail>
                <span>Area</span>
                <span>{props.country.area}</span>
            </CountryDetail>
            <CountryDetail>
                <span>Language</span>
                <span>{props.country.languages ? props.country.languages[0].name : ''}</span>
            </CountryDetail>
            <CountryDetail>
                <span>Timezone</span>
                <span>{props.country.timezones ? props.country.timezones[0] : ''}</span>
            </CountryDetail>
            <CountryDetail>
                <span>Currency</span>
                <span>{props.country.currencies ? props.country.currencies[0].name + ' ' + props.country.currencies[0].symbol : ''}</span>  
            </CountryDetail>
        </CountryInfo>
    </Wrapper>
);

export default CountryDetails;