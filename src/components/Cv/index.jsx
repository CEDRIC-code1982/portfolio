import React from 'react';

import './styles.css';

import cv from "/home/cedric/Repository/Portfolio/portfolio/src/assets/cv.pdf";

const Cv = () => (
  <div className='pdf'>
    <div className='cvpdf'>
      <iframe id="cv"
        title="cv de cedric"
        src={cv} />
    </div>
  </div>
);

export default Cv;