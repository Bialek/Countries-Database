import styled from 'styled-components';

export const CountriesList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`

export const SingleCountry = styled.div`
    width: 26%;
    position: relative;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
        width: 46%;
    }
`
export const CountryLayer = styled.div`
    position: absolute;
    background-color: #5DADE2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 999;
    transition: all ease-in-out .3s;
    ${SingleCountry}:hover & {
    opacity: .9;
  }
`