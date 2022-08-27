import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
const MyCards = () => {
  return (<>
    {['primary',
    ].map((variant)=>(
      <Alert key={variant} variant={variant}>
      <div className="container">
      <h1>Mis cartas</h1>
      </div>
      </Alert>
    ))}
    <div className="container">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
    </>
    ); 
  };
  
  export default MyCards;