import React from 'react';
import {useHistory} from 'react-router-dom';

function Projects() {

    let history = useHistory();

  return (
    <div>
        This is the project page
   <button
    onClick={() => {
        history.push('/about');
        console.log('history');
   }}
   >
    Go To About Page
   </button>
   </div>
  );
}

export default Projects;


