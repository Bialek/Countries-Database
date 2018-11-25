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

export const SelectButton = styled.button`
    padding: 15px 30px;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    transition: all ease-in-out .3s;
    cursor: pointer;
    &:hover {
        background-color: #fff;
    }
`