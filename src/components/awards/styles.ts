import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background-color: #121212; 
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
        color: #ffffff;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; 
    margin: 20px 700px;
    justify-content: center;
    justify-items: center;
`;

export const GridItem = styled.div`
    background: #242424;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease-in-out;
    width: 180px; 

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    p {
        margin-bottom: -8px;
        margin-top: 10px;
        font-size: 18px;
        color: #fff;
        text-align: center;
    }

    span {
        /* border-bottom: 1px solid #fff; */
    }
`;

export const StyleModal = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {

    }

    img {
        width: 110px;
    }

    span {
        color: #E0D36D;
    }

    p {
        width: 350px;
        text-align: center;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 3px;
    top: -15px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #242424;
    }
`;
