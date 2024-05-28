import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    color: white;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
`;

export const FilterBar = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
`;

export const FilterButton = styled.button`
    background-color: #5a65c7;
    border: none;
    border-radius: 20px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #484fa4;
    }
`;

export const Card = styled.li<{ rank: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 400px;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    /* background-color: ${({ rank }) => rank === 1 ? '#e6d752' : rank === 2 ? '#5a65c7' : rank === 3 ? '#b87333' : '#333'}; */
    border: 1px solid ${({ rank }) => rank === 1 ? '#e6d752' : rank === 2 ? '#5a65c7' : rank === 3 ? '#b87333' : '#444'};
    color: black;

    span {
        background-color: ${({ rank }) => rank === 1 ? '#e6d752' : rank === 2 ? '#5a65c7' : rank === 3 ? '#b87333' : '#444'};
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        font-weight: bold;
    }

    p {
        flex: 1;
        text-align: left;
        margin: 0;
        color: #FFF;
    }
`;
