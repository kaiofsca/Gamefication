import * as React from 'react';
import { Container } from "./styles";
import imgPerfil from "../../assets/iconPfp.png"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScienceIcon from '@mui/icons-material/Science';
import StarsIcon from '@mui/icons-material/Stars';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Tooltip } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = ({ data }: any) => {
    const [value, setValue] = React.useState('');

    console.log(data)
    console.log('value', value)
    return (
        <Container>
            <div style={{display: 'flex', gap: '35px'}}>
                <div style={{display: 'flex', gap: '10px'}}><AttachMoneyIcon style={{color: '#e6d752'}}/> {data[0]?.nuCoins}</div>
                <div></div>
                <div style={{display: 'flex', gap: '10px'}}><ScienceIcon style={{color: '#5a65c7'}}/> {data[0]?.nuExperiencia}</div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
                <h2 style={{textAlign: 'center'}}>Olá, <span style={{color: '#c2a5d6'}}>{data[0]?.nmAbreviado}!</span></h2>
                <img style={{borderRadius: '50%', width: '400px'}} src={imgPerfil} alt="" />
            </div>

            <div style={{ width: 500, backgroundColor: 'transparent', color: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                    <Tooltip title="Ranking">
                        <button onClick={() => setValue('ranking')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <StarsIcon style={{ fontSize: '40px' }} />
                        </button>
                    </Tooltip>
                    <Tooltip title="Conquistas">
                        <button onClick={() => setValue('conquistas')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <MilitaryTechIcon style={{ fontSize: '40px' }} />
                        </button>
                    </Tooltip>
                    <Tooltip title="Loja">
                        <button onClick={() => setValue('loja')} style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <LocalGroceryStoreIcon style={{ fontSize: '40px' }} />
                        </button>
                    </Tooltip>
                </div>
            </div>

        </Container>
    );
};

export default Home;
