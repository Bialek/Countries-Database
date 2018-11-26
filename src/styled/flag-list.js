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
    background-color: rgba(255,255,255,0.7);
    top: 0;
    overflow: hidden;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 999;
    transition: all ease-in-out .3s;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    opacity: 0;
    padding: 20px;
    ${SingleCountry}:hover & {
        opacity: 1;
    }
    & > a {
        width: 100%;
        height: 30%;
        font-size: 25px;
        font-weight: 900;
        color: #fff;
        border-radius: 20px;
        display: inline-flex;
        background-color: #2ecc71;
        text-decoration: none;
        justify-content: center;   
        align-items: center;
        padding: 0 10px;
        & > svg {
            margin-right: 10px;
        }
    }
  }
`

