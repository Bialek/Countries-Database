import styled from 'styled-components';

export const Btn = styled.button`
    border: none;
    height: 30%;
    width: 100%;
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 3%;
    background-color: ${props => props.delete ? '#e74c3c' : '#003e9f'} ;
    color: #fff;
    border-radius: 20px;
    display: inline-block;
    cursor: pointer;
    & > svg {
            margin-right: 10px;
        }
`