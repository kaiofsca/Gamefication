/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useEffect } from "react";
import { Container, Card, Header } from "./styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ranking = ({data}: any) => {
    useEffect(() => {
        console.log('aaaaaaaa', data)
    },[data])
    return (
        <Container>
            <Header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                 <ArrowBackIosIcon style={{color: '#FFF', position: 'absolute', right: '235px', top: '55px'}}/>
            </Link>
            <h1>Ranking</h1>
            </Header>
            <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {data?.map((item: any, index: number) => (
                    <Card key={index}>
                        <p>{item.nmAbreviado}</p>
                        <p>{item.nuExperiencia}</p>
                    </Card>
                ))}
            </ul>
        </Container>
    );
};

export default Ranking;
