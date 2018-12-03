import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 600px;
    width: 500px;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.13);
    margin: 20px auto;
`

export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 25%;
    background: #003e9f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const CountryFlag = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 10px solid #003e9f;
    left: 0;
    right: 0;
    bottom: -50px;
    margin: 0 auto;
    object-fit: cover;
`
export const CountryInfo = styled.div`
    padding: 60px 5px;
    font-family: 'Roboto Condesed';
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    flex-wrap: wrap;
`

export const CountryDetail = styled.div`
    text-align: center;
    width: 33%;
    margin: 10px 0;
    & span {
        display: block;
        font-weight: 600;
        font-size: 1.5em;
        color: #323232;
        &:first-child {
            font-size: 0.8em;
            text-transform: uppercase;
            color: #5f5f5f;
            letter-spacing: .15em;
        }
    }
`