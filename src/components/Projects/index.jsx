import React from 'react';

import { Card } from 'semantic-ui-react';

//import projects from '../../data/projects';

import './styles.css';

import convertisseur from "../../assets/convertisseur.jpg";
import todolist from "../../assets/todolist.jpg";
import gradient from "../../assets/gradient.jpg";
import github from "../../assets/github.jpg";
import authentification from "../../assets/authentification.jpg";

const Projects = () => (
  <div className='projects'>
    <div className='react'>
      <h1>Projets en React</h1>
      <ul className='react-project'>
      <li><a href="https://react_firebase_auth.surge.sh/"><Card color='blue' className='card'
          image={authentification}
          header='Authentification'
          description='réalisé avec Firebase, utilisation du context React, de React navigation 6 et de Bootstrap'
        /></a></li>
        <li><a href="https://convertisseur.surge.sh/"><Card color='blue' className='card'
          image={convertisseur}
          header='Convertisseur de devise'
          description='réalisé avec React et Prop-types'
        /></a></li>
        <li><a href="https://cp-todo.surge.sh/"><Card color='blue' className='card'
          image={todolist}
          header='Todolist'
          description='réalisé avec React et Prop-types'
        /></a></li>
        <li><a href="https://gradient-vanilla.surge.sh/"><Card color='blue' className='card'
          image={gradient}
          header='Gradient'
          description='réalisé avec React, Redux et Prop-types '
        /></a></li>
        <li><a href="https://apigit.surge.sh/"><Card color='blue' className='card'
          image={github}
          header='Api Github'
          description='Recherche de repository sur GitHub réalisé avec React, React Router, Axios, Prop-types et Sementic-UI'
        /></a></li>
      </ul>
    </div>
    <div className='native'>
      <h1>Projets en  React Native</h1>
      <h2>En cours de développement</h2>
    </div>
  </div>

);

export default Projects;