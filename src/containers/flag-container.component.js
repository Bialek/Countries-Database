import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getCountries())
        this.props.dispatch(searchCountries(''))
    }

    search = (e) => {
        this.props.dispatch(searchCountries(e.target.value));
    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" placeholder="find country" onChange={this.search}/>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);