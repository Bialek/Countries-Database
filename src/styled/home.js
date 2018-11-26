import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-image: url('http://mediad.publicbroadcasting.net/p/vpr/files/styles/x_large/public/201701/Map-countries-istock-ZarkoCvijovic-20170104.jpg');
    background-position: top center;
    background-size: cover;
    margin-top: -30px;
    & h1 {
        text-align: center;
        color: #777;
        margin: 0;
        padding-top: 10px;
    }
`