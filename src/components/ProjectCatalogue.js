import React from 'react';

import './styling/projectCatalogue.scss';

const ProjectCatalogue = ({ imageSrc, imageTitle, projectHeight }) => {

  return (
    <div className="projectCatalogueFrameCon">
      <img src={imageSrc} alt="projectImage" className={`projectCatalogueImage ${projectHeight}`}></img>
      <p>{imageTitle}</p>
    </div>
  )
}

export default ProjectCatalogue;