import React from 'react';

import './styles.css';

const Projects = () => (
    <div className='home'>
      <div className='react'>
      <h1>Projets React</h1>
      <ul className='react-project'>
        <li><a href= "https://convertisseur.surge.sh/">Convertisseur</a></li>
        <li><a href= "https://cp-todo.surge.sh/">Todolist</a></li>
        <li><a href= "https://gradient-vanilla.surge.sh/">Gradient</a></li>
        <li><a href= "https://apigit.surge.sh/">Api Git</a></li>
      </ul>
      </div>
      <div className='native'>
      <h1>Projets React Native</h1>  
      </div>
    </div>
  
  );
  
  export default Projects;