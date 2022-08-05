
import React from 'react';
import { toggle_light_mode } from '../../utils/dark';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom my-5">
        
        <a href="https://github.com/crimsondrac1" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/doug-erickson-2773298" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <div className="copyText"> &copy; 2022 Doug Erickson</div>
        <div className="column is-6 has-text-centered">
        <button id="dark" className="light-mode-button button" onClick={toggle_light_mode}>Dark Mode</button>
        </div>
       
    </footer>
    )
}

export default Footer;