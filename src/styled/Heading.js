import styled from 'styled-components';

export const Heading = styled.h2`
    width: 100%;
    text-align: center;
    color: #323232;
    letter-spacing: .2em;
    margin: 10px 0;
    font-size: ${props => props.primary ? '2.5em' : '1.6em'};
    font-weight: ${props => props.primary ? '900' : '400'};
`

export const HeadingSecendery = styled.h3`
    color: #323232;
    text-align: center;
`