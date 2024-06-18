/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import CloseIcon from '@mui/icons-material/Close';
import { Container, Header, Grid, GridItem } from "./styles";
// import SettingsIcon from '../../assets/settings.png';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Store = ({ data }: any) => {
    // const [selectedItem, setSelectedItem] = useState<any>(null);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data]);

    // const openModal = (item: any) => {
    //     setSelectedItem(item);
    //     setModalIsOpen(true);
    // };

    // const closeModal = () => {
    //     setSelectedItem(null);
    //     setModalIsOpen(false);
    // };

    return (
        <Container>
            <Header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ArrowBackIosIcon style={{ color: '#ffffff', position: 'absolute', left: '525px' }} />
                </Link>
                <h1>Loja</h1>
            </Header>

            {/* <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px', flexDirection: 'column', gap: '35px'}}>
                <WorkInProgress src={SettingsIcon} alt="" style={{width: '250px'}}/>
                <h2 style={{}}>Tela em construção!</h2>
            </div> */}

            <Grid>
                {data.map((item: any, index: number) => (
                    <GridItem key={index}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px'}}>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h3 style={{margin: 'none', textAlign: 'start'}}>{item.title}</h3>
                                <p>{item.description}</p>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <AttachMoneyIcon style={{color: '#e6d752', width: '15px'}}/>
                                    <span>{item.points}</span>
                                </div>
                            </div>
                            <button style={{backgroundColor: '#7DCF60', marginLeft: '25px'}}>Comprar</button>
                        </div>
                    </GridItem>
                ))}
            </Grid>

            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Item Details"
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        background: '#000', 
                        color: '#fff', 
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Optional: Add a darker overlay
                    }
                }}
            >
                {selectedItem && (
                    <StyleModal>
                        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px', flexDirection: 'column', gap: '35px'}}>
                            <WorkInProgress src={SettingsIcon} alt="" style={{width: '250px'}}/>
                            <h2 style={{}}>Tela em construção!</h2>
                        </div>
                        <CloseButton onClick={closeModal}><CloseIcon/></CloseButton>
                    </StyleModal>
                )}
            </Modal> */}
        </Container>
    );
};

export default Store;
