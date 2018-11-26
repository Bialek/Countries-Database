import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, ADD_FAVORITE, DELETE_FAVORITE } from '../actions/actions-countries';
const url = "https://restcountries.eu/rest/v2/";

const initialState = {
    countries: [], 
    selectedCountry: {},
    visibleCountries: [],
    favoriteCountries: [],
};

const countriesReducer = function (state = initialState, action) {
    (function () {
        state.countries = localStorage.getItem('countries');
        state.countries = JSON.parse(state.countries);
        if (state.countries === null ) {
            action.type = '';
            fetch(url + "all")
                .then(data => data.json())
                .then(data => {
                    state.countries = data;
                    localStorage.setItem('countries', JSON.stringify(data));
                });
            
        };
    })();

    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.numericCode === action.id);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.numericCode !== action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.numericCode !== action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.region === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});

        case ADD_FAVORITE:
            if(!!!state.favoriteCountries.find(favorite => favorite.numericCode === action.id)) {
                const favoriteCountry = state.countries.find(country => country.numericCode === action.id);
                const favoriteArray = [...state.favoriteCountries, favoriteCountry];
                return Object.assign({}, state,  {favoriteCountries: favoriteArray});
            }
            return state;
            
        case DELETE_FAVORITE:
           const notDeletedFavorite = state.favoriteCountries.filter(favorite => favorite.numericCode !== action.id);
           return Object.assign({}, state, {favoriteCountries: notDeletedFavorite});


        default: return state;
    }
};

export default countriesReducer;