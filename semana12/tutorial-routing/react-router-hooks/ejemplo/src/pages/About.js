import React from 'react';
import {useLocation, useHistory} from 'react-router';

function About() {

    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(history);

    function goBackHandle(){
        history.goBack();
    }

  return (
    <>
        <div>About</div>
        <div>location = {location.pathname}</div>
        <div>from = {location.state.from}</div>
        <button onClick={goBackHandle}>go back</button>
    </>
    
  )

}

export default About;
