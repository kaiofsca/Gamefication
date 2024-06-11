import * as React from 'react';
import { Container } from "./styles";
import imgPerfil from "../../assets/iconPfp.png";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScienceIcon from '@mui/icons-material/Science';
import StarsIcon from '@mui/icons-material/Stars';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = ({ data }: any) => {
    const [value, setValue] = React.useState('');

    console.log(data);
    console.log('value', value);
    return (
        <Container>
            <div style={{display: 'flex', gap: '35px'}}>
                <div style={{display: 'flex', gap: '10px'}}><AttachMoneyIcon style={{color: '#e6d752'}}/> {data[0]?.nuCoins}</div>
                <div></div>
                <div style={{display: 'flex', gap: '10px'}}><ScienceIcon style={{color: '#5a65c7'}}/> {data[0]?.nuExperiencia}</div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', position: 'relative'}}>
                <h2 style={{textAlign: 'center'}}>Olá, <span style={{color: '#c2a5d6'}}>{data[0]?.nmAbreviado}!</span></h2>
                <div style={{fontSize: '24px', position: 'absolute', right: '40px', top: '90px'}}>{data[0]?.nuNivel}</div>
                <img style={{borderRadius: '50%', width: '350px'}} src={data[0]?.profileImage || imgPerfil} alt="Perfil" />
                <div style={{color: '#fff', fontSize: '18px', width: '350px', textAlign: 'center', marginTop: '15px'}}>{data[0]?.nmCurso}</div>
            </div>

            <div style={{ width: '400px', backgroundColor: '#393939', color: 'white', display: 'flex', justifyContent: 'center', borderRadius: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                    <Tooltip title="Ranking">
                        <Link to="/ranking" style={{ textDecoration: 'none' }}>
                            <button onClick={() => setValue('ranking')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                                <StarsIcon style={{ fontSize: '40px' }} />
                            </button>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Conquistas">
                        <Link to="/awards" style={{ textDecoration: 'none' }}>
                            <button onClick={() => setValue('conquistas')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                                <MilitaryTechIcon style={{ fontSize: '40px' }} />
                            </button>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Loja">
                        <Link to="/store" style={{ textDecoration: 'none' }}>
                            <button onClick={() => setValue('loja')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                                <LocalGroceryStoreIcon style={{ fontSize: '40px' }} />
                            </button>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </Container>
    );
};

export default Home;
