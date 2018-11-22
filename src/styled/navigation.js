import styled from 'styled-components';

export const Navbar = styled.nav`
    background-image: linear-gradient(to bottom, #fff 0%, #f8f8f8 100%);
    background-repeat: repeat-x;
    border-radius: 4px;  
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    position: relative;
    height: 60px;
    border: 1px solid transparent;
`
export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
`

export const NavbarItem = styled.li`
    display: inline-flex;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: ${props => props.logo ? '2em' : '1.25em'};
    align-self: center;
    & a {
        color: #777;
        transition: all .4s ease-in-out;
        text-decoration: none;
        background-image: linear-gradient(to bottom, #777 0%, #777 100%);
        background-size: 0 2px;
        background-repeat: no-repeat;
        background-position: bottom;
        white-space: nowrap;
        font-size: inherit;
        &:hover {
            color: #4a4a4a;
            background-size: 100% 2px;
        }
    }
`