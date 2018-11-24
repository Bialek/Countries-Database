import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {
    chooseContinent = (event) => {
        console.log(event.target.value);
        
        this.props.dispatch(setContinent(event.target.value))
    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount = () => {
        this.props.dispatch(setContinent("Africa"));
    }

    render() { 
        return (
            <div>
                <div>
                    <button onClick={e => this.chooseContinent(e)} value="Africa">Africa</button>
                    <button onClick={e => this.chooseContinent(e)} value="Americas">Americas</button>
                    <button onClick={e => this.chooseContinent(e)} value="Asia">Asia</button>
                    <button onClick={e => this.chooseContinent(e)} value="Europe">Europe</button>
                    <button onClick={e => this.chooseContinent(e)} value="Oceania">Oceania</button>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(ContinentsContainer);