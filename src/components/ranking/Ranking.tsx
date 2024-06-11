/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Container, Card, Header, FilterBar, FilterButton, ListContainer, List } from "./styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ranking = ({ data }: any) => {
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [filter, setFilter] = useState<string>('nuRankCurso');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            let sortedData = [...data].sort((a, b) => a[filter] - b[filter]);
            if (filter === 'nuRankCurso' || filter === 'nuRankSemestre') {
                sortedData = sortedData.slice(0, 5);
            }
            setFilteredData(sortedData);
            setLoading(false);
        }, 500); // Simulating a delay for loading effect

        return () => clearTimeout(timeout);
    }, [data, filter]);

    const handleFilterClick = (filterType: string) => {
        setFilter(filterType);
    };

    return (
        <Container>
            <Header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ArrowBackIosIcon style={{ color: '#ffffff', position: 'absolute', left: '525px' }} />
                </Link>
                <h1>Ranking</h1>
            </Header>

            <FilterBar>
                <FilterButton 
                    className={filter === 'nuRankCurso' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('nuRankCurso')}
                >
                    Curso
                </FilterButton>
                <FilterButton 
                    className={filter === 'nuRankSemestre' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('nuRankSemestre')}
                >
                    Semestre
                </FilterButton>
                <FilterButton 
                    className={filter === 'nuRankUnidade' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('nuRankUnidade')}
                >
                    Unidade
                </FilterButton>
            </FilterBar>

            <ListContainer>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <List>
                        {filteredData.map((item: any, index: number) => (
                            <Card key={index} rank={index + 1}>
                                <span>{index + 1}</span>
                                <p>{item.nmAbreviado}</p>
                                {/* <p>{item.nuExperiencia}</p> */}
                            </Card>
                        ))}
                    </List>
                )}
            </ListContainer>
        </Container>
    );
};

export default Ranking;
