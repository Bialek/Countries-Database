import styled from 'styled-components';

export const Heading = styled.p`
    width: 100%;
    text-align: center;
    color: #323232;
    letter-spacing: .2em;
    font-size: ${props => props.primary ? '2.5em' : '1.6em'};
    font-weight: ${props => props.primary ? '900' : '400'};
`