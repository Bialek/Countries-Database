import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry, addFavorite } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';
import { SelectContinent } from '../styled/continents-container';
import { SelectButton } from '../styled/Buttons';

class ContinentsContainer extends Component {

    componentDidMount = () => {
        this.props.dispatch(setContinent("Africa"));
    }

    chooseContinent = (e) => {
        this.props.dispatch(setContinent(e.target.value))
    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    addFavorite = id => {
        this.props.dispatch(addFavorite(id));
    }

    render() { 
        return (
            <div>
                <SelectContinent>
                    <SelectButton onClick={e => this.chooseContinent(e)} value="Africa">Africa</SelectButton>
                    <SelectButton onClick={e => this.chooseContinent(e)} value="Americas">Americas</SelectButton>
                    <SelectButton onClick={e => this.chooseContinent(e)} value="Asia">Asia</SelectButton>
                    <SelectButton onClick={e => this.chooseContinent(e)} value="Europe">Europe</SelectButton>
                    <SelectButton onClick={e => this.chooseContinent(e)} value="Oceania">Oceania</SelectButton>
                </SelectContinent>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} addFavorite={this.addFavorite} />
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