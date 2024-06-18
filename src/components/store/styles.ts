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

export const WorkInProgress = styled.img`
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    animation: spin 4s linear infinite;
`;

export const StyleModal = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: none;

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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px; 
    margin: 20px 700px;
    justify-content: center;
    justify-items: center;
`;

export const GridItem = styled.div`
    display: flex;
    background: #242424;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    padding: 12px 33px;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    p {
        width: 100px;
        margin-top: -15px;
        font-size: 12px;
        color: #898989;
        text-align: start;
    }

    span {
        font-size: 12px;
        text-align: start;
    }
`;

