import React from 'react'
import Typical from 'react-typical'

//import LogoReact from "../../assets/logo192";

import './styles.css';

const steps = [
    'Bonjour 👋', 2000,
    'Bienvenue sur mon portfolio !', 2000,
    'Je suis Cédric Pineau', 2000,
    'Je suis développeur React ', 2000,
    'Je suis développeur React Native', 2000,
];



const Text = () => (
    <>
        <Typical
            steps={steps}
            loop={Infinity}
            wrapper="p"
            className={'text'}
        />
    </>
);


export default Text;