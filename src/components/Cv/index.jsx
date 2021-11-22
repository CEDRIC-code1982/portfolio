import React from 'react';

import './styles.css';

import cv from "/home/cedric/Repository/Portfolio/portfolio/src/assets/cv.pdf";

const Cv = () => (
  <div className='cvpdf'>
    <iframe id="pdf"
    title="cv de cedric"
    src={cv} />
  </div>

);

export default Cv;