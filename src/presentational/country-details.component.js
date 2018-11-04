import React from 'react';

const CountryDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img className="country-photo" src={props.country.flag} alt="country flag" />
        </header>
        <div className="country-info">
            <h1>{props.country.name}</h1>
            <h2>Continent: {props.country.region}</h2>

            <div className="info">
                <div>
                    <span>{!isNaN(props.country.population) ? (props.country.population / 1000).toFixed(1) + ' k': props.country.population}</span>
                    <span>Population</span>
                </div>

                <div>
                    <span>{props.country.capital}</span>
                    <span>Capital</span>
                </div>

                <div>
                    <span>{props.country.area}</span>
                    <span>Area</span>
                </div>
            </div>

            <div className="info">
                <div>
                    <span>{props.country.languages ? props.country.languages[0].name : ''}</span>
                    <span>Language</span>
                </div>

                <div>
                <span>{props.country.timezones ? props.country.timezones[0] : ''}</span>
                    <span>Timezone</span>
                </div>

                <div>
                    <span>{props.country.currencies ? props.country.currencies[0].name + ' ' + props.country.currencies[0].symbol : ''}</span>
                    <span>Currency</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;