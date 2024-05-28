/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Container, Card, Header, FilterBar, FilterButton } from "./styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ranking = ({ data }: any) => {
    useEffect(() => {
        console.log('Ranking data:', data);
    }, [data]);

    return (
        <Container>
            <Header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ArrowBackIosIcon style={{ color: '#FFF', position: 'absolute', left: '525px' }} />
                </Link>
                <h1>Ranking</h1>
            </Header>

            <FilterBar>
                <FilterButton>Curso</FilterButton>
                <FilterButton>Semestre</FilterButton>
                <FilterButton>Unidade</FilterButton>
            </FilterBar>

            <div style={{width: '100vw', height: '100vh'}}>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {data?.map((item: any, index: number) => (
                        <Card key={index} rank={index + 1}>
                            <span>{index + 1}</span>
                            <p>{item.nmAbreviado}</p>
                        </Card>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Ranking;
