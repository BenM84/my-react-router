import React from 'react';
import {useLocation} from 'react-router-dom';

function PageNotFound() {

    let location = useLocation();
    

  return (
    <div>Oops....{location.pathname}PageNotFound</div>
  );
}

export default PageNotFound;