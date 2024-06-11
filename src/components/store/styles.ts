import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
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

