import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry, addFavorite } from '../actions/actions-countries';
import { SearchInput } from '../styled/SearchInput';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.props.dispatch(getCountries())
        this.props.dispatch(searchCountries(''))
    }

    search = e => {
        this.props.dispatch(searchCountries(e.target.value));
    }

    deleteCountry = id => {
        this.props.dispatch(deleteCountry(id));
    }

    addFavorite = id => {
        this.props.dispatch(addFavorite(id));
    }

    render() {
        return (
            <div>
                <SearchInput 
                    type="text" 
                    placeholder="Type here, to find country" 
                    onChange={this.search} 
                    ref={this.inputRef}
                    onMouseEnter={() => {
                        this.inputRef.current.focus()
                    }}
                />
                <CountryFlagList 
                    countries={this.props.visibleCountries} 
                    deleteCountry={this.deleteCountry}
                    addFavorite={this.addFavorite}
                />
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