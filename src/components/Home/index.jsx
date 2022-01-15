import React from 'react';

import Typical from '../Typical/Typical';

import './styles.css';


const Home = () => (
   <div className='home-text'>
      <div className='welcome'>
         <Typical />
         <br />
         <p>
            Après 20 années dans l'automobile très enrichissantes, j'ai décidé de me lancer un nouveau défi.
         </p>
         <br />
         <p>
            Repartir de zéro dans un domaine inconnu pour moi et qui m'a toujours fasciné. J'ai choisi une formation intensive avec l'école O'Clock pour apprendre le développement web.
         </p>
         <br />
         <p>
            J'en suis sorti plus grand, avide d'apprendre encore plus et de mettre mes nouvelles compétences en œuvre.
         </p>
         <br />
         <p>
            Si vous cherchez quelqu'un de dynamique, consciencieux et de toujours joyeux. Je suis cette personne.
            
         </p>
         <br />
         <p>
         N'hésitez pas à me contacter par mail à <a href="mailto:cedric.pineau007@gmail.com" >cedric.pineau007@gmail.com</a>.
         </p>
      </div>
   </div>
);

export default Home;