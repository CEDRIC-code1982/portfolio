import React from 'react';

import { Card } from 'semantic-ui-react';

import './styles.css';

const Projects = () => (
  <div className='projects'>
    <div className='react'>
      <h1>Projets React</h1>
      <ul className='react-project'>
        <li><a href="https://convertisseur.surge.sh/"><Card color='blue' className='card'
          image='../assets/user.jpg'
          header='Convertisseur'
          description='Un joli convertisseur en React très reactif !'
        /></a></li>
        <li><a href="https://cp-todo.surge.sh/"><Card color='blue' className='card'
          image='../assets/user.jpg'
          header='Todolist'
          description='Fini les oublies avec la Todolist !'
        /></a></li>
        <li><a href="https://gradient-vanilla.surge.sh/"><Card color='blue' className='card'
          image='/src/assets/user.jpg'
          header='Gradient'
          description='Idéal pour trouver une nuance !'
        /></a></li>
        <li><a href="https://apigit.surge.sh/"><Card color='blue' className='card'
          image='../assets/user.jpg'
          header='Api Github'
          description='Pratique pour rechercher sur Github !'
        /></a></li>
      </ul>
    </div>
    <div className='native'>
      <h1>Projets React Native</h1>
      <h2>En cours de développement</h2>
    </div>
  </div>

);

export default Projects;