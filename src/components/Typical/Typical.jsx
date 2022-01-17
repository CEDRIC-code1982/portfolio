import React from 'react'
import Typical from 'react-typical'

//import LogoReact from "../../assets/logo192";

import './styles.css';

const steps = [
    'Bonjour 👋', 2000,
    'Bienvenue sur mon portfolio !', 2000,
    "Je m'appelle Cédric Pineau", 2000,
    'Je suis développeur React ', 2000,
    'Je suis développeur React et React Native', 2000,
    'Bonne lecture et bonne navigation !', 2000,
];

const Text = () => (
    <>
        <Typical
            steps={steps}
            //loop={Infinity}
            wrapper="p"
            className={'text'}
        />
    </>
);


export default Text;