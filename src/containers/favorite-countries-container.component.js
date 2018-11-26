import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteCountryList from '../presentational/favorite-countries.component';
import { deleteFavorite } from '../actions/actions-countries';

class FavoriteCountryContainer extends Component {
    deleteFavorite = id => {
        this.props.dispatch(deleteFavorite(id));
    }

    render() {
        return (
            <div>
                <FavoriteCountryList countries={this.props.favoriteCountries} deleteFavorite={this.deleteFavorite} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        favoriteCountries: store.countriesReducer.favoriteCountries
    };
};

export default connect(mapStateToProps)(FavoriteCountryContainer);