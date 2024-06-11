/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Header, CloseButton, StyleModal, WorkInProgress } from "./styles";
import SettingsIcon from '../../assets/settings.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Store = ({ data }: any) => {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data]);

    // const openModal = (item: any) => {
    //     setSelectedItem(item);
    //     setModalIsOpen(true);
    // };

    const closeModal = () => {
        setSelectedItem(null);
        setModalIsOpen(false);
    };

    return (
        <Container>
            <Header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ArrowBackIosIcon style={{ color: '#ffffff', position: 'absolute', left: '525px' }} />
                </Link>
                <h1>Loja</h1>
            </Header>

            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px', flexDirection: 'column', gap: '35px'}}>
                <WorkInProgress src={SettingsIcon} alt="" style={{width: '250px'}}/>
                <h2 style={{}}>Tela em construção!</h2>
            </div>

            {/* <Grid>
                {data.map((item: any, index: number) => (
                    <GridItem key={index} onClick={() => openModal(item)}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <span>___________</span>
                    </GridItem>
                ))}
            </Grid> */}

            <Modal
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
                        <div style={{display: 'flex', gap: '20px'}}>
                            <img src={selectedItem.image} alt={selectedItem.title} />
                            <div>
                                <h2>{selectedItem.title}</h2>
                                <span> + {selectedItem.points} pontos</span>
                            </div>
                        </div>
                        <p>{selectedItem.description}</p>
                        <CloseButton onClick={closeModal}><CloseIcon/></CloseButton>
                    </StyleModal>
                )}
            </Modal>
        </Container>
    );
};

export default Store;
