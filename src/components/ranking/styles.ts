import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100px;
    list-style: none;
    width: 300px;
    padding: 5px 15px;
    border: 1px solid rebeccapurple;
    margin-bottom: 15px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;