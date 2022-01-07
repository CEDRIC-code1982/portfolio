import React from 'react';

import { Card } from 'semantic-ui-react';

import './styles.css';

import convertisseur from "../../assets/convertisseur.jpg";
import todolist from "../../assets/todolist.jpg";
import gradient from "../../assets/gradient.jpg";
import github from "../../assets/github.jpg";

const Projects = () => (
  <div className='projects'>
    <div className='react'>
      <h1>Projets en React</h1>
      <ul className='react-project'>
        <li><a href="https://convertisseur.surge.sh/"><Card color='blue' className='card'
          image={convertisseur}
          header='Convertisseur'
          description='Un joli convertisseur en React très reactif !'
        /></a></li>
        <li><a href="https://cp-todo.surge.sh/"><Card color='blue' className='card'
          image={todolist}
          header='Todolist'
          description='Fini les oublies avec la Todolist !'
        /></a></li>
        <li><a href="https://gradient-vanilla.surge.sh/"><Card color='blue' className='card'
          image={gradient}
          header='Gradient'
          description='Idéal pour trouver une nuance !'
        /></a></li>
        <li><a href="https://apigit.surge.sh/"><Card color='blue' className='card'
          image={github}
          header='Api Github'
          description='Pratique pour rechercher sur Github !'
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